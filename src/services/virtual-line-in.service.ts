// Automatically generated by service-generator.js, don't change!
import { BaseService } from './base-service';
import { Track } from '../models';

export class VirtualLineInService extends BaseService {
  readonly serviceNane: string = 'VirtualLineIn';
  readonly controlUrl: string = '/MediaRenderer/VirtualLineIn/Control';  
  readonly eventSubUrl: string = '/MediaRenderer/VirtualLineIn/Event';
  readonly scpUrl: string = '/xml/VirtualLineIn1.xml';

  //#region methods
  async Next(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Next', input); }

  async Pause(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Pause', input); }

  async Play(input: { InstanceID: number; Speed: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Play', input); }

  async Previous(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Previous', input); }

  async SetVolume(input: { InstanceID: number; DesiredVolume: number }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetVolume', input); }

  async StartTransmission(input: { InstanceID: number; CoordinatorID: string }):
    Promise<StartTransmissionResponse>{ return await this.SoapRequestWithBody<typeof input, StartTransmissionResponse>('StartTransmission', input); }

  async Stop(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Stop', input); }

  async StopTransmission(input: { InstanceID: number; CoordinatorID: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('StopTransmission', input); }
  //#endregion
}

// Generated responses
export interface StartTransmissionResponse {
  CurrentTransportSettings: string;
}
