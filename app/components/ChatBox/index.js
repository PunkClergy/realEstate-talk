import MarkDownRender from "../MarkDownRender";
import { UserOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
const ChatBox = ({ item, index }) => {
    return (
        <div key={index}>
            <div className={`w-full p-5 mx-auto max-w-5xl`}>
                <div className={`w-full flex items-start gap-5 ${item?.role === "You" && "justify-end"} `}>
                    {item?.role === "AI" && (
                        <div className="!w-8 !h-8 flex items-center justify-center text-xl text-white overflow-hidden	">
                            <img src="/ai.png" className='w-[30px] h-[30px]' />
                        </div>
                    )}
                    {item?.msg ? (
                        <div className={`${item?.role === "AI" ? "text-left " : ""} 
                             text-black px-3 py-2 bg-white  rounded-md max-w-[calc(100%-50px)]`}>
                            <MarkDownRender msg={item?.msg} role={item?.role} />
                        </div>
                    ) : (
                        <div style={{ width: "calc(100% - 50px)" }}>
                            <Skeleton active />
                        </div>
                    )}
                    {item?.role === "You" && (
                        <div className="w-8 h-8	bg-sky-600 flex items-center justify-center text-xl text-white overflow-hidden	">
                            <UserOutlined />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatBox