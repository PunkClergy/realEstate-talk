import { Button, Skeleton, Image } from "antd";
import { ReloadOutlined, EnvironmentOutlined, BankOutlined } from "@ant-design/icons";
const Referral = ({ index, dataSource, status, handleReset }) => {
    return (
        (dataSource?.suggestHouseList?.length != 0) && <div className="mx-auto max-w-5xl">
            {status && index != 0 && <div className={`p-5 flex gap-5 `}>

                <div className="!w-8 !h-8 flex items-center justify-center text-xl text-white overflow-hidden	">
                    <img src="/ai.png" alt='' className='w-[30px] h-[30px]' />
                </div>

                {
                    dataSource?.suggestHouseList?.map((item, index) => {
                        return <div className=" bg-white rounded-md p-2 shadow-md flex-1 max-w-max ">
                            <div key={index}>
                                {/* 推荐房源头部 */}
                                <div className="flex justify-between items-center px-1 py-2 pt-0 gap-[30px]" >
                                    <div className="flex items-center gap-1">
                                        <span className="!text-[#000] font-[600]">
                                            推荐{item?.propertiesSale ? '楼盘' : '房源'}
                                        </span>
                                    </div>
                                    <div className="!text-[#000] flex items-center gap-2 cursor-pointer"
                                        onClick={() => { handleReset() }}>
                                        换一换 <ReloadOutlined />
                                    </div>
                                </div>
                                {/* 推荐房源具体信息 */}
                                <div className="flex bg-white p-3 rounded-md  gap-5">
                                    <Image width={'5rem'} preview={false} src={item?.houseImage} alt='' />
                                    <div className="flex flex-col justify-center">
                                        <div className="text-[#333]  text-[14px] font-[600]">
                                            {item?.propertiesSale ? item?.propertiesSale : item?.communityName}
                                        </div>
                                        <div className="text-[#333] text-[12px]">
                                            <EnvironmentOutlined /> {item?.propertiesSale ? item?.salesAddress : item?.communityName}
                                        </div>
                                        <div className="text-[#333] text-[12px]">
                                            <BankOutlined /> {item?.propertiesSale ?
                                                `户型:${item?.buildingLayout} 建面${item?.unitArea}` :
                                                `${item?.floor || ''} ${item?.houseLayout || ''}丨${item?.buildingArea || ''}丨${item?.houseOrientation || ''}`}
                                        </div>
                                    </div>
                                </div>
                                {/* 推荐房源房产经纪人 */}
                                <div className="flex flex-row justify-end items-center gap-1 p-[5px] bg-[#e7c278] rounded-xl">
                                    <div className="text-[14px]">联系房产经纪人</div>
                                    <img className=" w-6 h-6 rounded-[50%]" src={dataSource?.agent?.image} alt='' />
                                    <div className='min-w-14 font-[600] text-[16px]'>  {item?.agentName} </div>
                                    <Button className="!bg-[#07C160] px-1 py-1" type="primary">
                                        {item?.agentPhone}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    })
                }

                {
                    !dataSource && <Skeleton title={false} paragraph={{ rows: 3 }} />
                }
            </div>}
        </div>
    )
}
export default Referral