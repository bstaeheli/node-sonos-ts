// Automatically generated by service-generator.js, don't change!
import { BaseService } from './base-service';

/**
 * Zone config stuff, eg getting all the configured sonos zones.
 *
 * @export
 * @class ZoneGroupTopologyService
 * @extends {BaseService}
 */
export class ZoneGroupTopologyService extends BaseService {
  readonly serviceNane: string = 'ZoneGroupTopology';
  readonly controlUrl: string = '/ZoneGroupTopology/Control';  
  readonly eventSubUrl: string = '/ZoneGroupTopology/Event';
  readonly scpUrl: string = '/xml/ZoneGroupTopology1.xml';

  //#region methods
  async BeginSoftwareUpdate(input: { UpdateURL: string; Flags: number; ExtraOptions: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('BeginSoftwareUpdate', input); }

  async CheckForUpdate(input: { UpdateType: string; CachedOnly: boolean; Version: string }):
    Promise<CheckForUpdateResponse>{ return await this.SoapRequestWithBody<typeof input, CheckForUpdateResponse>('CheckForUpdate', input); }

  async GetZoneGroupAttributes():
    Promise<GetZoneGroupAttributesResponse>{ return await this.SoapRequest<GetZoneGroupAttributesResponse>('GetZoneGroupAttributes'); }

  async GetZoneGroupState():
    Promise<GetZoneGroupStateResponse>{ return await this.SoapRequest<GetZoneGroupStateResponse>('GetZoneGroupState'); }

  async RegisterMobileDevice(input: { MobileDeviceName: string; MobileDeviceUDN: string; MobileIPAndPort: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('RegisterMobileDevice', input); }

  async ReportAlarmStartedRunning():
    Promise<boolean> { return await this.SoapRequestNoResponse('ReportAlarmStartedRunning'); }

  async ReportUnresponsiveDevice(input: { DeviceUUID: string; DesiredAction: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('ReportUnresponsiveDevice', input); }

  async SubmitDiagnostics(input: { IncludeControllers: boolean; Type: string }):
    Promise<SubmitDiagnosticsResponse>{ return await this.SoapRequestWithBody<typeof input, SubmitDiagnosticsResponse>('SubmitDiagnostics', input); }
  //#endregion
}

// Generated responses
export interface CheckForUpdateResponse {
  UpdateItem: string;
}

export interface GetZoneGroupAttributesResponse {
  CurrentZoneGroupName: string;
  CurrentZoneGroupID: string;
  CurrentZonePlayerUUIDsInGroup: string;
  CurrentMuseHouseholdId: string;
}

export interface GetZoneGroupStateResponse {
  ZoneGroupState: string;
}

export interface SubmitDiagnosticsResponse {
  DiagnosticID: number;
}
