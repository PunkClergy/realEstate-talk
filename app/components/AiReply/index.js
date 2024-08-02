"use client";
import React, { useEffect, useState, useRef, Fragment } from "react";
import { realWelcomeApi, realBeginChatApi, changeBatchApi, getHouseAgentApi } from "@/service/api";
import { nanoid } from "nanoid";
import ChatBox from "../ChatBox";
import ChatClickBox from "../ChatClickBox";
import Referral from "../Referral"
import safeLocalStorage from "@/utils/localStorage";
export default function Index() {
  const ctnRef = useRef();
  const [id, setId] = useState(undefined);
  const [PageLoading, setPageLoading] = useState(true)
  const [txt, setTxt] = useState();
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [houseList, setHouseList] = useState(null)
  const [questionList, setQuestionList] = useState(null)
  const [houseStatus, setHouseStatus] = useState(true)
  const [questStatus, setQuestStatus] = useState(true)
  const [records, setRecoset] = useState()

  // 欢迎语
  const getWelcomeMsg = async () => {
    setIsLoading(true);
    const res = await realWelcomeApi({
      id: id,
      firstChangeBatchFlag: true,
    });
    const newList = [
      ...list,
      {
        role: "AI", type: "text",
        msg: res?.data?.reply?.reply,
        data: {
          ...res?.data?.reply,
          intention: null,
        },
      }];
    await handleReferrerReset();
    setList(newList);
    setIsLoading(false);
    setPageLoading(false);
  };
  // AI对话
  const handleSendToAI = async (data) => {
    // 接口调用前
    setIsLoading(true);
    setHouseStatus(false);
    setQuestStatus(false)
    setTxt("");
    let text = data || txt;
    setRecoset(text)
    if (isLoading || !text) return;
    const newList = [...list];
    newList.push({ role: "You", msg: text, type: "text" });
    newList.push({
      role: "AI", msg: "", type: "text", data: {
        suggestHouseList: null,
        suggestQuestionList: null
      }
    });
    setList(newList);
    setTimeout(() => {
      ctnRef.current.scrollTop =
        ctnRef.current.scrollHeight - ctnRef.current.clientHeight;
    }, 200);
    // 接口调用后
    let index = newList?.length - 1;
    const res = await realBeginChatApi({ id: id, context: text });
    if (res?.code === 200) {
      setHouseStatus(true)
      setQuestStatus(true)
      setQuestionList(null)
      setHouseList(null)
      const reply = res?.data?.reply?.reply;
      newList[index].msg = reply;
      newList[index].data = res?.data?.reply;
      // 推荐房源
      const houseAgentRes = await getHouseAgentApi({ id, context: text });
      if (houseAgentRes?.code === 200) {

        if (houseAgentRes?.data?.reply?.suggestHouseList) {
          setHouseList(houseAgentRes?.data?.reply)
        } else {
          setHouseStatus(false)
        }
      }
      // 推荐政策
      const changeBatch = await changeBatchApi({ id, context: false });
      if (changeBatch?.code === 200) {
        if (changeBatch?.data?.reply?.suggestQuestionList) {
          setQuestionList(changeBatch?.data?.reply?.suggestQuestionList)
        } else {
          setQuestStatus(false)
        }
      }

    } else {
      newList[newList?.length - 1].msg = "请求错误!";
    }
    // 重新setState
    setList([...newList]);
    setIsLoading(false);
    setTimeout(() => {
      ctnRef.current.scrollTop =
        ctnRef.current.scrollHeight - ctnRef.current.clientHeight;
    }, 200);
  };
  // 重置推荐快捷话术
  const handleReferrerReset = async () => {
    setQuestionList(null)
    const changeBatch = await changeBatchApi({ id: id, firstChangeBatchFlag: false })
    if (changeBatch?.code === 200) {
      setQuestionList(changeBatch?.data?.reply?.suggestQuestionList)
    }
  };
  // 重置房源推荐
  const handleResetHousingClick = async () => {
    setHouseList(null)
    const houseAgentRes = await getHouseAgentApi({ id, context: records });
    if (houseAgentRes?.code === 200) {
      setHouseList(houseAgentRes?.data?.reply)
    }
  }
  useEffect(() => {
    // 获取请求聊天ID
    let storedId = safeLocalStorage.getItem("chatId");
    if (!storedId) {
      storedId = nanoid();
      safeLocalStorage.setItem("chatId", storedId);
    }
    setId(storedId)
  }, []);

  useEffect(() => {
    id && getWelcomeMsg(id);
  }, [id])

  return (
    <>
      <div className={'w-full h-full relative bg-gray-50'}>
        {/* 系统初始化中请稍后 */}
        {PageLoading && <div
          className={`px-2 py-1.5 bg-blue-500 shadow-lg shadow-blue-500/50 text-white rounded-b-md flex items-center justify-center	`}
        >
          <svg className="animate-spin -ml-1 mr-1 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>系统初始化中请稍后</span>
        </div>}
        {/* 初始化接口请求完毕 */}
        {!PageLoading && (
          <>
            {/* 内容回显区域 AI or YOU */}
            <div ref={ctnRef} className={'w-full overflow-auto'} style={{ height: "calc(100% - 64px)" }}>
              {list?.length > 0 &&
                list?.map((item, index) => {
                  return (
                    <Fragment key={index}>
                      <ChatBox
                        item={item}
                        index={index}
                        lawyer={item?.data}
                      />
                      {index === list?.length - 1 && (
                        <>
                          <Referral
                            index={index}
                            dataSource={houseList}
                            status={houseStatus}
                            handleReset={handleResetHousingClick}
                          />
                          <ChatClickBox
                            dataSource={questionList}
                            index={index}
                            handleReset={handleReferrerReset}
                            handleClick={handleSendToAI}
                            status={questStatus}
                          />
                        </>
                      )}
                    </Fragment>
                  );
                })}
            </div>
            {/* 内容输入和内容发送区域 */}
            <div className="absolute bottom-0 left-0 w-full">
              <div className=" mx-auto flex items-center justify-center gap-x-2 w-full p-3	max-w-5xl	">
                <input id="send" placeholder="请输入" value={txt}
                  className={`
                    min-w-0 flex-auto rounded-md border-0 px-3.5 py-2  
                    focus:ring-2 focus:ring-white	 
                    focus:outline-none appearance-none 
                     placeholder-slate-400 text-black ring-2
                      ring-white shadow-md`}
                  onChange={(e) => {
                    setTxt(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e?.code === "Enter" && !isLoading && txt) {
                      handleSendToAI();
                    }
                  }}
                />
                <button
                  type="submit"
                  className={
                    `flex-none rounded-md
                     bg-sky-600 px-3.5 py-2.5 
                     text-sm font-semibold 
                     text-white shadow-sm focus-visible:outline 
                     focus-visible:outline-2 focus-visible:outline-offset-2
                      focus-visible:outline-indigo-500 ${(isLoading || !txt) && "!bg-[#ccc] cursor-no-drop"}`
                  }
                  onClick={() => { (!isLoading && txt) && handleSendToAI() }}
                  disabled={isLoading || !txt}>
                  发送
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}



