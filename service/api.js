import request from '@/utils/request';

const realWelcomeApi = (data) => request(`/real/real/welcome`, 'POST', data);
const realBeginChatApi = (data) => request(`/real/real/beginChat`, 'POST', data);
const changeBatchApi = (data) => request(`/real/real/changeBatch`, 'POST', data);
const getHouseAgentApi = (data) => request(`/real/real/getHouseAgent`, 'POST', data);

export { realWelcomeApi, realBeginChatApi,changeBatchApi,getHouseAgentApi };
