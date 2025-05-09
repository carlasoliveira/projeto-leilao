import BaseService from "./BaseService";

class PersonService extends BaseService{
    constructor(){
        super('person');
    }

    async login(credentials){
        const response = await this.api.post(`${this.endpoint}/login`, credentials);
        return response.data;
    }

    async codeRecover(email){
        const response = await this.api.post(`${this.endpoint}/password-code-request`, {email});
        return response.data;
    }

    async changePassword(credentials){
        const response = await this.api.put(`${this.endpoint}/change-password`, credentials);
        return response.data;
    }
}

export default PersonService;