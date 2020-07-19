// Automatically generated by service-generator.js, don't change!
import BaseService from './base-service';

/**
 * Volume related controls for groups
 *
 * @export
 * @class GroupRenderingControlService
 * @extends {BaseService}
 */
export class GroupRenderingControlService extends BaseService<GroupRenderingControlServiceEvent> {
  readonly serviceNane: string = 'GroupRenderingControl';

  readonly controlUrl: string = '/MediaRenderer/GroupRenderingControl/Control';

  readonly eventSubUrl: string = '/MediaRenderer/GroupRenderingControl/Event';

  readonly scpUrl: string = '/xml/GroupRenderingControl1.xml';

  // #region methods
  /**
   * Get if the group is muted
   *
   * @param {number} input.InstanceID - Sonos only serves one Instance always set to 0
   */
  async GetGroupMute(input: { InstanceID: number } = { InstanceID: 0 }):
  Promise<GetGroupMuteResponse> { return await this.SoapRequestWithBody<typeof input, GetGroupMuteResponse>('GetGroupMute', input); }

  /**
   * Get the average group volume
   *
   * @param {number} input.InstanceID - Sonos only serves one Instance always set to 0
   */
  async GetGroupVolume(input: { InstanceID: number } = { InstanceID: 0 }):
  Promise<GetGroupVolumeResponse> { return await this.SoapRequestWithBody<typeof input, GetGroupVolumeResponse>('GetGroupVolume', input); }

  /**
   * (Un-/)Mute the entire group
   *
   * @param {number} input.InstanceID - Sonos only serves one Instance always set to 0
   * @param {boolean} input.DesiredMute - True for mute, false for unmute
   */
  async SetGroupMute(input: { InstanceID: number; DesiredMute: boolean }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetGroupMute', input); }

  /**
   * Change group volume, players will be changed proportionally
   *
   * @param {number} input.InstanceID - Sonos only serves one Instance always set to 0
   * @param {number} input.DesiredVolume - New volume
   */
  async SetGroupVolume(input: { InstanceID: number; DesiredVolume: number }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetGroupVolume', input); }

  /**
   * Relativly change group volume
   *
   * @param {number} input.InstanceID - Sonos only serves one Instance always set to 0
   * @param {number} input.Adjustment - number between -100 / +100
   */
  async SetRelativeGroupVolume(input: { InstanceID: number; Adjustment: number }):
  Promise<SetRelativeGroupVolumeResponse> { return await this.SoapRequestWithBody<typeof input, SetRelativeGroupVolumeResponse>('SetRelativeGroupVolume', input); }

  async SnapshotGroupVolume(input: { InstanceID: number } = { InstanceID: 0 }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SnapshotGroupVolume', input); }
  // #endregion

  // Event properties from service description.
  protected eventProperties(): {[key: string]: string} {
    return {
      GroupMute: 'boolean',
      GroupVolume: 'number',
      GroupVolumeChangeable: 'boolean',
    };
  }
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

// Strong type event
export interface GroupRenderingControlServiceEvent {
  GroupMute?: boolean;
  GroupVolume?: number;
  GroupVolumeChangeable?: boolean;
}
