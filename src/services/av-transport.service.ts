// Automatically generated by service-generator.js, don't change!
import { BaseService } from './base-service';
import { PlayMode, Track } from '../models';

/**
 * Service that controls stuff related to transport (play/pause/next/special urls)
 *
 * @export
 * @class AVTransportService
 * @extends {BaseService}
 */
export class AVTransportService extends BaseService {
  readonly serviceNane: string = 'AVTransport';
  readonly controlUrl: string = '/MediaRenderer/AVTransport/Control';  
  readonly eventSubUrl: string = '/MediaRenderer/AVTransport/Event';
  readonly scpUrl: string = '/xml/AVTransport1.xml';

  //#region methods
  async AddMultipleURIsToQueue(input: { InstanceID: number; UpdateID: number; NumberOfURIs: number; EnqueuedURIs: string; EnqueuedURIsMetaData: string | Track; ContainerURI: string; ContainerMetaData: string | Track; DesiredFirstTrackNumberEnqueued: number; EnqueueAsNext: boolean }):
    Promise<AddMultipleURIsToQueueResponse>{ return await this.SoapRequestWithBody<typeof input, AddMultipleURIsToQueueResponse>('AddMultipleURIsToQueue', input); }

  async AddURIToQueue(input: { InstanceID: number; EnqueuedURI: string; EnqueuedURIMetaData: string | Track; DesiredFirstTrackNumberEnqueued: number; EnqueueAsNext: boolean }):
    Promise<AddURIToQueueResponse>{ return await this.SoapRequestWithBody<typeof input, AddURIToQueueResponse>('AddURIToQueue', input); }

  async AddURIToSavedQueue(input: { InstanceID: number; ObjectID: string; UpdateID: number; EnqueuedURI: string; EnqueuedURIMetaData: string | Track; AddAtIndex: number }):
    Promise<AddURIToSavedQueueResponse>{ return await this.SoapRequestWithBody<typeof input, AddURIToSavedQueueResponse>('AddURIToSavedQueue', input); }

  async BackupQueue(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('BackupQueue', input); }

  async BecomeCoordinatorOfStandaloneGroup(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<BecomeCoordinatorOfStandaloneGroupResponse>{ return await this.SoapRequestWithBody<typeof input, BecomeCoordinatorOfStandaloneGroupResponse>('BecomeCoordinatorOfStandaloneGroup', input); }

  async BecomeGroupCoordinator(input: { InstanceID: number; CurrentCoordinator: string; CurrentGroupID: string; OtherMembers: string; TransportSettings: string; CurrentURI: string; CurrentURIMetaData: string | Track; SleepTimerState: string; AlarmState: string; StreamRestartState: string; CurrentQueueTrackList: string; CurrentVLIState: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('BecomeGroupCoordinator', input); }

  async BecomeGroupCoordinatorAndSource(input: { InstanceID: number; CurrentCoordinator: string; CurrentGroupID: string; OtherMembers: string; CurrentURI: string; CurrentURIMetaData: string | Track; SleepTimerState: string; AlarmState: string; StreamRestartState: string; CurrentAVTTrackList: string; CurrentQueueTrackList: string; CurrentSourceState: string; ResumePlayback: boolean }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('BecomeGroupCoordinatorAndSource', input); }

  async ChangeCoordinator(input: { InstanceID: number; CurrentCoordinator: string; NewCoordinator: string; NewTransportSettings: string; CurrentAVTransportURI: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('ChangeCoordinator', input); }

  async ChangeTransportSettings(input: { InstanceID: number; NewTransportSettings: string; CurrentAVTransportURI: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('ChangeTransportSettings', input); }

  async ConfigureSleepTimer(input: { InstanceID: number; NewSleepTimerDuration: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('ConfigureSleepTimer', input); }

  async CreateSavedQueue(input: { InstanceID: number; Title: string; EnqueuedURI: string; EnqueuedURIMetaData: string | Track }):
    Promise<CreateSavedQueueResponse>{ return await this.SoapRequestWithBody<typeof input, CreateSavedQueueResponse>('CreateSavedQueue', input); }

  async DelegateGroupCoordinationTo(input: { InstanceID: number; NewCoordinator: string; RejoinGroup: boolean }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('DelegateGroupCoordinationTo', input); }

  async EndDirectControlSession(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('EndDirectControlSession', input); }

  async GetCrossfadeMode(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetCrossfadeModeResponse>{ return await this.SoapRequestWithBody<typeof input, GetCrossfadeModeResponse>('GetCrossfadeMode', input); }

  async GetCurrentTransportActions(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetCurrentTransportActionsResponse>{ return await this.SoapRequestWithBody<typeof input, GetCurrentTransportActionsResponse>('GetCurrentTransportActions', input); }

  async GetDeviceCapabilities(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetDeviceCapabilitiesResponse>{ return await this.SoapRequestWithBody<typeof input, GetDeviceCapabilitiesResponse>('GetDeviceCapabilities', input); }

  async GetMediaInfo(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetMediaInfoResponse>{ return await this.SoapRequestWithBody<typeof input, GetMediaInfoResponse>('GetMediaInfo', input); }

  async GetPositionInfo(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetPositionInfoResponse>{ return await this.SoapRequestWithBody<typeof input, GetPositionInfoResponse>('GetPositionInfo', input); }

  async GetRemainingSleepTimerDuration(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetRemainingSleepTimerDurationResponse>{ return await this.SoapRequestWithBody<typeof input, GetRemainingSleepTimerDurationResponse>('GetRemainingSleepTimerDuration', input); }

  async GetRunningAlarmProperties(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetRunningAlarmPropertiesResponse>{ return await this.SoapRequestWithBody<typeof input, GetRunningAlarmPropertiesResponse>('GetRunningAlarmProperties', input); }

  async GetTransportInfo(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetTransportInfoResponse>{ return await this.SoapRequestWithBody<typeof input, GetTransportInfoResponse>('GetTransportInfo', input); }

  async GetTransportSettings(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<GetTransportSettingsResponse>{ return await this.SoapRequestWithBody<typeof input, GetTransportSettingsResponse>('GetTransportSettings', input); }

  async Next(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Next', input); }

  async NotifyDeletedURI(input: { InstanceID: number; DeletedURI: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('NotifyDeletedURI', input); }

  async Pause(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Pause', input); }

  async Play(input: { InstanceID: number; Speed: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Play', input); }

  async Previous(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Previous', input); }

  async RemoveAllTracksFromQueue(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('RemoveAllTracksFromQueue', input); }

  async RemoveTrackFromQueue(input: { InstanceID: number; ObjectID: string; UpdateID: number }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('RemoveTrackFromQueue', input); }

  async RemoveTrackRangeFromQueue(input: { InstanceID: number; UpdateID: number; StartingIndex: number; NumberOfTracks: number }):
    Promise<RemoveTrackRangeFromQueueResponse>{ return await this.SoapRequestWithBody<typeof input, RemoveTrackRangeFromQueueResponse>('RemoveTrackRangeFromQueue', input); }

  async ReorderTracksInQueue(input: { InstanceID: number; StartingIndex: number; NumberOfTracks: number; InsertBefore: number; UpdateID: number }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('ReorderTracksInQueue', input); }

  async ReorderTracksInSavedQueue(input: { InstanceID: number; ObjectID: string; UpdateID: number; TrackList: string; NewPositionList: string }):
    Promise<ReorderTracksInSavedQueueResponse>{ return await this.SoapRequestWithBody<typeof input, ReorderTracksInSavedQueueResponse>('ReorderTracksInSavedQueue', input); }

  async RunAlarm(input: { InstanceID: number; AlarmID: number; LoggedStartTime: string; Duration: string; ProgramURI: string; ProgramMetaData: string | Track; PlayMode: PlayMode; Volume: number; IncludeLinkedZones: boolean }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('RunAlarm', input); }

  async SaveQueue(input: { InstanceID: number; Title: string; ObjectID: string }):
    Promise<SaveQueueResponse>{ return await this.SoapRequestWithBody<typeof input, SaveQueueResponse>('SaveQueue', input); }

  async Seek(input: { InstanceID: number; Unit: string; Target: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Seek', input); }

  async SetAVTransportURI(input: { InstanceID: number; CurrentURI: string; CurrentURIMetaData: string | Track }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetAVTransportURI', input); }

  async SetCrossfadeMode(input: { InstanceID: number; CrossfadeMode: boolean }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetCrossfadeMode', input); }

  async SetNextAVTransportURI(input: { InstanceID: number; NextURI: string; NextURIMetaData: string | Track }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetNextAVTransportURI', input); }

  async SetPlayMode(input: { InstanceID: number; NewPlayMode: PlayMode }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetPlayMode', input); }

  async SnoozeAlarm(input: { InstanceID: number; Duration: string }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SnoozeAlarm', input); }

  async StartAutoplay(input: { InstanceID: number; ProgramURI: string; ProgramMetaData: string | Track; Volume: number; IncludeLinkedZones: boolean; ResetVolumeAfter: boolean }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('StartAutoplay', input); }

  async Stop(input: { InstanceID: number } = { InstanceID: 0 }):
    Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('Stop', input); }
  //#endregion
}

// Generated responses
export interface AddMultipleURIsToQueueResponse {
  FirstTrackNumberEnqueued: number;
  NumTracksAdded: number;
  NewQueueLength: number;
  NewUpdateID: number;
}

export interface AddURIToQueueResponse {
  FirstTrackNumberEnqueued: number;
  NumTracksAdded: number;
  NewQueueLength: number;
}

export interface AddURIToSavedQueueResponse {
  NumTracksAdded: number;
  NewQueueLength: number;
  NewUpdateID: number;
}

export interface BecomeCoordinatorOfStandaloneGroupResponse {
  DelegatedGroupCoordinatorID: string;
  NewGroupID: string;
}

export interface CreateSavedQueueResponse {
  NumTracksAdded: number;
  NewQueueLength: number;
  AssignedObjectID: string;
  NewUpdateID: number;
}

export interface GetCrossfadeModeResponse {
  CrossfadeMode: boolean;
}

export interface GetCurrentTransportActionsResponse {
  Actions: string;
}

export interface GetDeviceCapabilitiesResponse {
  PlayMedia: string;
  RecMedia: string;
  RecQualityModes: string;
}

export interface GetMediaInfoResponse {
  NrTracks: number;
  MediaDuration: string;
  CurrentURI: string;
  CurrentURIMetaData: string | Track;
  NextURI: string;
  NextURIMetaData: string | Track;
  PlayMedium: string;
  RecordMedium: string;
  WriteStatus: string;
}

export interface GetPositionInfoResponse {
  Track: number;
  TrackDuration: string;
  TrackMetaData: string | Track;
  TrackURI: string;
  RelTime: string;
  AbsTime: string;
  RelCount: number;
  AbsCount: number;
}

export interface GetRemainingSleepTimerDurationResponse {
  RemainingSleepTimerDuration: string;
  CurrentSleepTimerGeneration: number;
}

export interface GetRunningAlarmPropertiesResponse {
  AlarmID: number;
  GroupID: string;
  LoggedStartTime: string;
}

export interface GetTransportInfoResponse {
  CurrentTransportState: string;
  CurrentTransportStatus: string;
  CurrentSpeed: string;
}

export interface GetTransportSettingsResponse {
  PlayMode: PlayMode;
  RecQualityMode: string;
}

export interface RemoveTrackRangeFromQueueResponse {
  NewUpdateID: number;
}

export interface ReorderTracksInSavedQueueResponse {
  QueueLengthChange: number;
  NewQueueLength: number;
  NewUpdateID: number;
}

export interface SaveQueueResponse {
  AssignedObjectID: string;
}
