// Automatically generated by service-generator.js, don't change!
import { BaseService } from './base-service';

/**
 * External music services
 *
 * @export
 * @class MusicServicesService
 * @extends {BaseService}
 */
export class MusicServicesService extends BaseService {
  readonly serviceNane: string = 'MusicServices';
  readonly controlUrl: string = '/MusicServices/Control';  
  readonly eventSubUrl: string = '/MusicServices/Event';
  readonly scpUrl: string = '/xml/MusicServices1.xml';

  //#region methods
  async GetSessionId(input: { ServiceId: number; Username: string }):
    Promise<GetSessionIdResponse>{ return await this.SoapRequestWithBody<typeof input, GetSessionIdResponse>('GetSessionId', input); }

  async ListAvailableServices():
    Promise<ListAvailableServicesResponse>{ return await this.SoapRequest<ListAvailableServicesResponse>('ListAvailableServices'); }

  async UpdateAvailableServices():
    Promise<boolean> { return await this.SoapRequestNoResponse('UpdateAvailableServices'); }
  //#endregion
}

// Generated responses
export interface GetSessionIdResponse {
  SessionId: string;
}

export interface ListAvailableServicesResponse {
  AvailableServiceDescriptorList: string;
  AvailableServiceTypeList: string;
  AvailableServiceListVersion: string;
}
