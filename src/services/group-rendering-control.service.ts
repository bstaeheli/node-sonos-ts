// Automatically generated by service-generator.js, don't change!
import { BaseService } from './base-service';

/**
 * Volume related controls for groups
 *
 * @export
 * @class GroupRenderingControlService
 * @extends {BaseService}
 */
export class GroupRenderingControlService extends BaseService {
  readonly serviceNane: string = 'GroupRenderingControl';
  readonly controlUrl: string = '/MediaRenderer/GroupRenderingControl/Control';  
  readonly eventSubUrl: string = '/MediaRenderer/GroupRenderingControl/Event';
  readonly scpUrl: string = '/xml/GroupRenderingControl1.xml';

  //#region methods
  async GetGroupMute(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetGroupMuteResponse>{ return await this.SoapRequestWithBody<typeof input, GetGroupMuteResponse>('GetGroupMute', input); }

  async GetGroupVolume(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetGroupVolumeResponse>{ return await this.SoapRequestWithBody<typeof input, GetGroupVolumeResponse>('GetGroupVolume', input); }

  async SetGroupMute(input: { InstanceID: number; DesiredMute: boolean }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetGroupMute', input); }

  async SetGroupVolume(input: { InstanceID: number; DesiredVolume: number }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetGroupVolume', input); }

  async SetRelativeGroupVolume(input: { InstanceID: number; Adjustment: number }):
    Promise<SetRelativeGroupVolumeResponse>{ return await this.SoapRequestWithBody<typeof input, SetRelativeGroupVolumeResponse>('SetRelativeGroupVolume', input); }

  async SnapshotGroupVolume(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SnapshotGroupVolume', input); }
  //#endregion
}

// Generated responses
export interface GetGroupMuteResponse {
  CurrentMute: boolean;
}

export interface GetGroupVolumeResponse {
  CurrentVolume: number;
}

export interface SetRelativeGroupVolumeResponse {
  NewVolume: number;
}
