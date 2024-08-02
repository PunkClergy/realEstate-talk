
import { Skeleton } from "antd";
import MarkDownRender from "../MarkDownRender";

const ChatClickBox = ({ dataSource, index, handleReset, handleClick, status }) => {
    return (
        <div key={index} className="mx-auto max-w-5xl">
            {status && <div className={`p-5 flex gap-5 `}>
                <div className="!w-8 !h-8 flex items-center justify-center text-xl text-white overflow-hidden	">
                    <img src="/ai.png" className='w-[30px] h-[30px]'/>
                </div>
                <div className="bg-white rounded-md p-2 px-4 shadow-md flex-1 max-w-max ">
                    {/* 推荐话术头部 */}
                    <div className="flex justify-between items-center px-1 py-2 pt-0 gap-[30px] border-[#eee] border-b">
                        <div className="flex items-center gap-1 ">
                            <div className="w-6 h-6 flex justify-center">
                                <img src="./assist.png" />
                            </div>
                            <span className="!text-[#000]">
                                {index == 0 ? "大家都在问这些" : "您可以试试这样问"}{" "}
                            </span>
                        </div>
                        <div
                            className="!text-[#448aff] flex items-center gap-2 cursor-pointer"
                            onClick={() => {
                                handleReset(dataSource, index);
                            }}
                        >
                            <div className="w-6 h-6 flex justify-center">
                                <img src='./refresh.png' />
                            </div>
                            {index == 0 && "换一批"}
                        </div>
                    </div>
                    {/* 推荐话术具体内容 */}
                    {
                        dataSource?.map?.((text, _index) => {
                            return (
                                <div className="flex hover:bg-[#f9f9f9] gap-[10px] 
                                                items-center cursor-pointer p-1  
                                                py-2 text-[#448aff] border-[#eee] border-b"
                                    onClick={() => { handleClick(text, index) }}
                                    key={_index}>
                                    {
                                        !!text && (
                                            <>
                                                <div className="w-1 h-1 rounded-[50%] bg-[#fdca26]"></div>
                                                <MarkDownRender msg={text} />
                                            </>
                                        )
                                    }
                                </div>
                            );
                        })
                    }
                    {
                        !dataSource && <Skeleton title={false} paragraph={{ rows: 3 }} />
                    }
                </div>
            </div>}
        </div>
    );
};
export default ChatClickBox;