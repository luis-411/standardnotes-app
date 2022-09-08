import { Uuid } from '@standardnotes/common'

const SharingPaths = {
  invite: '/v1/subscription-invites',
  acceptInvite: (inviteUuid: Uuid) => `/v1/subscription-invites/${inviteUuid}/accept`,
  declineInvite: (inviteUuid: Uuid) => `/v1/subscription-invites/${inviteUuid}/decline`,
  cancelInvite: (inviteUuid: Uuid) => `/v1/subscription-invites/${inviteUuid}`,
  listInvites: '/v1/subscription-invites',
}

export const Paths = {
  v1: {
    ...SharingPaths,
  },
}