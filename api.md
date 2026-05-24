# Whoami

Types:

- <code><a href="./src/resources/whoami.ts">WhoamiRetrieveResponse</a></code>

Methods:

- <code title="get /api/whoami">client.whoami.<a href="./src/resources/whoami.ts">retrieve</a>() -> WhoamiRetrieveResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountDisconnectResponse</a></code>

Methods:

- <code title="get /api/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="delete /api/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">disconnect</a>(id) -> AccountDisconnectResponse | null</code>

# Me

Types:

- <code><a href="./src/resources/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/me.ts">MeGetModelStartDateResponse</a></code>
- <code><a href="./src/resources/me.ts">MeGetTopPercentageResponse</a></code>

Methods:

- <code title="get /api/{account}/me">client.me.<a href="./src/resources/me.ts">retrieve</a>(account) -> MeRetrieveResponse</code>
- <code title="get /api/{account}/me/model-start-date">client.me.<a href="./src/resources/me.ts">getModelStartDate</a>(account) -> MeGetModelStartDateResponse</code>
- <code title="get /api/{account}/me/top-percentage">client.me.<a href="./src/resources/me.ts">getTopPercentage</a>(account) -> MeGetTopPercentageResponse</code>

# Analytics

## Financial

Types:

- <code><a href="./src/resources/analytics/financial/financial.ts">FinancialGetForecastResponse</a></code>

Methods:

- <code title="post /api/analytics/financial/forecast">client.analytics.financial.<a href="./src/resources/analytics/financial/financial.ts">getForecast</a>({ ...params }) -> FinancialGetForecastResponse</code>

### Transactions

Types:

- <code><a href="./src/resources/analytics/financial/transactions.ts">TransactionGetByTypeResponse</a></code>
- <code><a href="./src/resources/analytics/financial/transactions.ts">TransactionGetSummaryResponse</a></code>

Methods:

- <code title="post /api/analytics/financial/transactions/by-type">client.analytics.financial.transactions.<a href="./src/resources/analytics/financial/transactions.ts">getByType</a>({ ...params }) -> TransactionGetByTypeResponse</code>
- <code title="post /api/analytics/financial/transactions/summary">client.analytics.financial.transactions.<a href="./src/resources/analytics/financial/transactions.ts">getSummary</a>({ ...params }) -> TransactionGetSummaryResponse</code>

### Profitability

Types:

- <code><a href="./src/resources/analytics/financial/profitability.ts">ProfitabilityGetHistoryResponse</a></code>
- <code><a href="./src/resources/analytics/financial/profitability.ts">ProfitabilityGetProfitabilityResponse</a></code>

Methods:

- <code title="get /api/analytics/financial/profitability/{account}/history">client.analytics.financial.profitability.<a href="./src/resources/analytics/financial/profitability.ts">getHistory</a>(account, { ...params }) -> ProfitabilityGetHistoryResponse</code>
- <code title="post /api/analytics/financial/profitability">client.analytics.financial.profitability.<a href="./src/resources/analytics/financial/profitability.ts">getProfitability</a>({ ...params }) -> ProfitabilityGetProfitabilityResponse</code>

## Summary

Types:

- <code><a href="./src/resources/analytics/summary.ts">SummaryGetEarningsOverviewResponse</a></code>
- <code><a href="./src/resources/analytics/summary.ts">SummaryGetHistoricalPerformanceResponse</a></code>
- <code><a href="./src/resources/analytics/summary.ts">SummaryGetPeriodComparisonResponse</a></code>

Methods:

- <code title="post /api/analytics/summary/earnings">client.analytics.summary.<a href="./src/resources/analytics/summary.ts">getEarningsOverview</a>({ ...params }) -> SummaryGetEarningsOverviewResponse</code>
- <code title="post /api/analytics/summary/historical">client.analytics.summary.<a href="./src/resources/analytics/summary.ts">getHistoricalPerformance</a>({ ...params }) -> SummaryGetHistoricalPerformanceResponse</code>
- <code title="post /api/analytics/summary/comparison">client.analytics.summary.<a href="./src/resources/analytics/summary.ts">getPeriodComparison</a>({ ...params }) -> SummaryGetPeriodComparisonResponse</code>

# Banking

Types:

- <code><a href="./src/resources/banking/banking.ts">BankingListAvailablePayoutSystemsResponse</a></code>
- <code><a href="./src/resources/banking/banking.ts">BankingListCountriesResponse</a></code>

Methods:

- <code title="get /api/{account}/banking/available-payout-systems">client.banking.<a href="./src/resources/banking/banking.ts">listAvailablePayoutSystems</a>(account) -> BankingListAvailablePayoutSystemsResponse</code>
- <code title="get /api/{account}/banking/countries">client.banking.<a href="./src/resources/banking/banking.ts">listCountries</a>(account) -> BankingListCountriesResponse</code>

## Details

Types:

- <code><a href="./src/resources/banking/details.ts">DetailRetrieveAccountCountryDetailsResponse</a></code>
- <code><a href="./src/resources/banking/details.ts">DetailRetrieveBankDetailsResponse</a></code>
- <code><a href="./src/resources/banking/details.ts">DetailRetrieveDac7FormDetailsResponse</a></code>
- <code><a href="./src/resources/banking/details.ts">DetailRetrieveLegalAndTaxStatusResponse</a></code>
- <code><a href="./src/resources/banking/details.ts">DetailRetrieveLegalFormDetailsResponse</a></code>

Methods:

- <code title="get /api/{account}/banking/details/account-country">client.banking.details.<a href="./src/resources/banking/details.ts">retrieveAccountCountryDetails</a>(account) -> DetailRetrieveAccountCountryDetailsResponse</code>
- <code title="get /api/{account}/banking/details/bank">client.banking.details.<a href="./src/resources/banking/details.ts">retrieveBankDetails</a>(account) -> DetailRetrieveBankDetailsResponse</code>
- <code title="get /api/{account}/banking/details/dac7-form">client.banking.details.<a href="./src/resources/banking/details.ts">retrieveDac7FormDetails</a>(account) -> DetailRetrieveDac7FormDetailsResponse</code>
- <code title="get /api/{account}/banking/details/legal-info">client.banking.details.<a href="./src/resources/banking/details.ts">retrieveLegalAndTaxStatus</a>(account) -> DetailRetrieveLegalAndTaxStatusResponse</code>
- <code title="get /api/{account}/banking/details/legal-form">client.banking.details.<a href="./src/resources/banking/details.ts">retrieveLegalFormDetails</a>(account) -> DetailRetrieveLegalFormDetailsResponse</code>

# Chargebacks

Types:

- <code><a href="./src/resources/chargebacks.ts">ChargebackListResponse</a></code>
- <code><a href="./src/resources/chargebacks.ts">ChargebackCalculateRatioResponse</a></code>
- <code><a href="./src/resources/chargebacks.ts">ChargebackListStatisticsResponse</a></code>

Methods:

- <code title="get /api/{account}/chargebacks">client.chargebacks.<a href="./src/resources/chargebacks.ts">list</a>(account, { ...params }) -> ChargebackListResponse</code>
- <code title="get /api/{account}/chargebacks/ratio">client.chargebacks.<a href="./src/resources/chargebacks.ts">calculateRatio</a>(account, { ...params }) -> ChargebackCalculateRatioResponse</code>
- <code title="get /api/{account}/chargebacks/statistics">client.chargebacks.<a href="./src/resources/chargebacks.ts">listStatistics</a>(account, { ...params }) -> ChargebackListStatisticsResponse</code>

# Chats

Types:

- <code><a href="./src/resources/chats/chats.ts">ChatListResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatDeleteResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatHideResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatListMediaResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatMarkAsUnreadResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatMuteResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatStartTypingResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatUnmuteResponse</a></code>

Methods:

- <code title="get /api/{account}/chats">client.chats.<a href="./src/resources/chats/chats.ts">list</a>(account, { ...params }) -> ChatListResponse</code>
- <code title="delete /api/{account}/chats/{chat_id}">client.chats.<a href="./src/resources/chats/chats.ts">delete</a>(chatID, { ...params }) -> ChatDeleteResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/hide">client.chats.<a href="./src/resources/chats/chats.ts">hide</a>(chatID, { ...params }) -> ChatHideResponse</code>
- <code title="get /api/{account}/chats/{chat_id}/media">client.chats.<a href="./src/resources/chats/chats.ts">listMedia</a>(chatID, { ...params }) -> ChatListMediaResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/mark-as-unread">client.chats.<a href="./src/resources/chats/chats.ts">markAsUnread</a>(chatID, { ...params }) -> ChatMarkAsUnreadResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/mute">client.chats.<a href="./src/resources/chats/chats.ts">mute</a>(chatID, { ...params }) -> ChatMuteResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/typing">client.chats.<a href="./src/resources/chats/chats.ts">startTyping</a>(chatID, { ...params }) -> ChatStartTypingResponse</code>
- <code title="delete /api/{account}/chats/{chat_id}/unmute">client.chats.<a href="./src/resources/chats/chats.ts">unmute</a>(chatID, { ...params }) -> ChatUnmuteResponse</code>

## Messages

Types:

- <code><a href="./src/resources/chats/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageDeleteResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageLikeResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessagePinResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageSearchResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageSendResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageUnlikeResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageUnpinResponse</a></code>

Methods:

- <code title="get /api/{account}/chats/{chat_id}/messages/{message_id}">client.chats.messages.<a href="./src/resources/chats/messages.ts">retrieve</a>(messageID, { ...params }) -> MessageRetrieveResponse</code>
- <code title="get /api/{account}/chats/{chat_id}/messages">client.chats.messages.<a href="./src/resources/chats/messages.ts">list</a>(chatID, { ...params }) -> MessageListResponse</code>
- <code title="delete /api/{account}/chats/{chat_id}/messages/{message_id}">client.chats.messages.<a href="./src/resources/chats/messages.ts">delete</a>(messageID, { ...params }) -> MessageDeleteResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/messages/{message_id}/like">client.chats.messages.<a href="./src/resources/chats/messages.ts">like</a>(messageID, { ...params }) -> MessageLikeResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/messages/{message_id}/pin">client.chats.messages.<a href="./src/resources/chats/messages.ts">pin</a>(messageID, { ...params }) -> MessagePinResponse</code>
- <code title="get /api/{account}/chats/{chat_id}/messages/search">client.chats.messages.<a href="./src/resources/chats/messages.ts">search</a>(chatID, { ...params }) -> MessageSearchResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/messages">client.chats.messages.<a href="./src/resources/chats/messages.ts">send</a>(chatID, { ...params }) -> MessageSendResponse</code>
- <code title="delete /api/{account}/chats/{chat_id}/messages/{message_id}/unlike">client.chats.messages.<a href="./src/resources/chats/messages.ts">unlike</a>(messageID, { ...params }) -> MessageUnlikeResponse</code>
- <code title="delete /api/{account}/chats/{chat_id}/messages/{message_id}/unpin">client.chats.messages.<a href="./src/resources/chats/messages.ts">unpin</a>(messageID, { ...params }) -> MessageUnpinResponse</code>

## MarkAsRead

Types:

- <code><a href="./src/resources/chats/mark-as-read.ts">MarkAsReadAllResponse</a></code>

Methods:

- <code title="post /api/{account}/chats/mark-as-read">client.chats.markAsRead.<a href="./src/resources/chats/mark-as-read.ts">all</a>(account) -> MarkAsReadAllResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageAttachTagsResponse</a></code>

Methods:

- <code title="post /api/{account}/messages/{message_id}/attach-tags">client.messages.<a href="./src/resources/messages.ts">attachTags</a>(messageID, { ...params }) -> MessageAttachTagsResponse</code>

# ClientSessions

Types:

- <code><a href="./src/resources/client-sessions.ts">ClientSessionCreateResponse</a></code>

Methods:

- <code title="post /api/client-sessions">client.clientSessions.<a href="./src/resources/client-sessions.ts">create</a>({ ...params }) -> ClientSessionCreateResponse</code>

# Authenticate

Types:

- <code><a href="./src/resources/authenticate.ts">AuthenticatePollStatusResponse</a></code>
- <code><a href="./src/resources/authenticate.ts">AuthenticateReauthenticateResponse</a></code>
- <code><a href="./src/resources/authenticate.ts">AuthenticateSend2faEmailResponse</a></code>
- <code><a href="./src/resources/authenticate.ts">AuthenticateStartResponse</a></code>
- <code><a href="./src/resources/authenticate.ts">AuthenticateSubmit2faResponse</a></code>

Methods:

- <code title="get /api/authenticate/{attempt_id}">client.authenticate.<a href="./src/resources/authenticate.ts">pollStatus</a>(attemptID) -> AuthenticatePollStatusResponse</code>
- <code title="post /api/authenticate/{account_id}/reauthenticate">client.authenticate.<a href="./src/resources/authenticate.ts">reauthenticate</a>(accountID) -> AuthenticateReauthenticateResponse</code>
- <code title="post /api/authenticate/{attempt_id}/send-email-to-creator">client.authenticate.<a href="./src/resources/authenticate.ts">send2faEmail</a>(attemptID) -> AuthenticateSend2faEmailResponse</code>
- <code title="post /api/authenticate">client.authenticate.<a href="./src/resources/authenticate.ts">start</a>({ ...params }) -> AuthenticateStartResponse</code>
- <code title="put /api/authenticate/{attempt_id}">client.authenticate.<a href="./src/resources/authenticate.ts">submit2fa</a>(attemptID, { ...params }) -> AuthenticateSubmit2faResponse</code>

# DataExports

Types:

- <code><a href="./src/resources/data-exports.ts">DataExportCreateResponse</a></code>
- <code><a href="./src/resources/data-exports.ts">DataExportRetrieveResponse</a></code>
- <code><a href="./src/resources/data-exports.ts">DataExportListResponse</a></code>
- <code><a href="./src/resources/data-exports.ts">DataExportCancelResponse</a></code>
- <code><a href="./src/resources/data-exports.ts">DataExportRetryResponse</a></code>
- <code><a href="./src/resources/data-exports.ts">DataExportStartResponse</a></code>

Methods:

- <code title="post /api/data-exports">client.dataExports.<a href="./src/resources/data-exports.ts">create</a>({ ...params }) -> DataExportCreateResponse</code>
- <code title="get /api/data-exports/{data_export_id}">client.dataExports.<a href="./src/resources/data-exports.ts">retrieve</a>(dataExportID, { ...params }) -> DataExportRetrieveResponse</code>
- <code title="get /api/data-exports">client.dataExports.<a href="./src/resources/data-exports.ts">list</a>({ ...params }) -> DataExportListResponse</code>
- <code title="delete /api/data-exports/{data_export_id}">client.dataExports.<a href="./src/resources/data-exports.ts">cancel</a>(dataExportID) -> DataExportCancelResponse</code>
- <code title="post /api/data-exports/{data_export_id}/retry">client.dataExports.<a href="./src/resources/data-exports.ts">retry</a>(dataExportID) -> DataExportRetryResponse</code>
- <code title="post /api/data-exports/{data_export_id}/start">client.dataExports.<a href="./src/resources/data-exports.ts">start</a>(dataExportID) -> DataExportStartResponse</code>

# Engagement

## Messages

Types:

- <code><a href="./src/resources/engagement/messages/messages.ts">MessageGetMessageBuyersResponse</a></code>
- <code><a href="./src/resources/engagement/messages/messages.ts">MessageGetTopMessageResponse</a></code>

Methods:

- <code title="get /api/{account}/engagement/messages/{message_id}/buyers">client.engagement.messages.<a href="./src/resources/engagement/messages/messages.ts">getMessageBuyers</a>(messageID, { ...params }) -> MessageGetMessageBuyersResponse</code>
- <code title="get /api/{account}/engagement/messages/top-message">client.engagement.messages.<a href="./src/resources/engagement/messages/messages.ts">getTopMessage</a>(account, { ...params }) -> MessageGetTopMessageResponse</code>

### MassMessages

Types:

- <code><a href="./src/resources/engagement/messages/mass-messages.ts">MassMessageListResponse</a></code>
- <code><a href="./src/resources/engagement/messages/mass-messages.ts">MassMessageChartResponse</a></code>

Methods:

- <code title="get /api/{account}/engagement/messages/mass-messages">client.engagement.messages.massMessages.<a href="./src/resources/engagement/messages/mass-messages.ts">list</a>(account, { ...params }) -> MassMessageListResponse</code>
- <code title="get /api/{account}/engagement/messages/mass-messages/chart">client.engagement.messages.massMessages.<a href="./src/resources/engagement/messages/mass-messages.ts">chart</a>(account, { ...params }) -> MassMessageChartResponse</code>

### DirectMessages

Types:

- <code><a href="./src/resources/engagement/messages/direct-messages.ts">DirectMessageListResponse</a></code>
- <code><a href="./src/resources/engagement/messages/direct-messages.ts">DirectMessageChartResponse</a></code>

Methods:

- <code title="get /api/{account}/engagement/messages/direct-messages">client.engagement.messages.directMessages.<a href="./src/resources/engagement/messages/direct-messages.ts">list</a>(account, { ...params }) -> DirectMessageListResponse</code>
- <code title="get /api/{account}/engagement/messages/direct-messages/chart">client.engagement.messages.directMessages.<a href="./src/resources/engagement/messages/direct-messages.ts">chart</a>(account, { ...params }) -> DirectMessageChartResponse</code>

# Fans

Types:

- <code><a href="./src/resources/fans/fans.ts">FanGetSubscriptionHistoryResponse</a></code>
- <code><a href="./src/resources/fans/fans.ts">FanListActiveResponse</a></code>
- <code><a href="./src/resources/fans/fans.ts">FanListAllResponse</a></code>
- <code><a href="./src/resources/fans/fans.ts">FanListExpiredResponse</a></code>
- <code><a href="./src/resources/fans/fans.ts">FanListLatestResponse</a></code>
- <code><a href="./src/resources/fans/fans.ts">FanListTopResponse</a></code>
- <code><a href="./src/resources/fans/fans.ts">FanSetCustomNameResponse</a></code>

Methods:

- <code title="get /api/{account}/fans/{user_id}/subscriptions-history">client.fans.<a href="./src/resources/fans/fans.ts">getSubscriptionHistory</a>(userID, { ...params }) -> FanGetSubscriptionHistoryResponse</code>
- <code title="get /api/{account}/fans/active">client.fans.<a href="./src/resources/fans/fans.ts">listActive</a>(account, { ...params }) -> FanListActiveResponse</code>
- <code title="get /api/{account}/fans/all">client.fans.<a href="./src/resources/fans/fans.ts">listAll</a>(account, { ...params }) -> FanListAllResponse</code>
- <code title="get /api/{account}/fans/expired">client.fans.<a href="./src/resources/fans/fans.ts">listExpired</a>(account, { ...params }) -> FanListExpiredResponse</code>
- <code title="get /api/{account}/fans/latest">client.fans.<a href="./src/resources/fans/fans.ts">listLatest</a>(account, { ...params }) -> FanListLatestResponse</code>
- <code title="get /api/{account}/fans/top">client.fans.<a href="./src/resources/fans/fans.ts">listTop</a>(account, { ...params }) -> FanListTopResponse</code>
- <code title="put /api/{account}/fans/{fan_id}/custom-name">client.fans.<a href="./src/resources/fans/fans.ts">setCustomName</a>(fanID, { ...params }) -> FanSetCustomNameResponse</code>

## Notes

Types:

- <code><a href="./src/resources/fans/notes.ts">NoteClearNotesResponse</a></code>
- <code><a href="./src/resources/fans/notes.ts">NoteCreateEditNotesResponse</a></code>
- <code><a href="./src/resources/fans/notes.ts">NoteGetNotesResponse</a></code>

Methods:

- <code title="delete /api/{account}/fans/{fan_id}/notes">client.fans.notes.<a href="./src/resources/fans/notes.ts">clearNotes</a>(fanID, { ...params }) -> NoteClearNotesResponse</code>
- <code title="put /api/{account}/fans/{fan_id}/notes">client.fans.notes.<a href="./src/resources/fans/notes.ts">createEditNotes</a>(fanID, { ...params }) -> NoteCreateEditNotesResponse</code>
- <code title="get /api/{account}/fans/{fan_id}/notes">client.fans.notes.<a href="./src/resources/fans/notes.ts">getNotes</a>(fanID, { ...params }) -> NoteGetNotesResponse</code>

## Summary

Types:

- <code><a href="./src/resources/fans/summary.ts">SummaryGenerateSummaryResponse</a></code>
- <code><a href="./src/resources/fans/summary.ts">SummaryGetSummaryResponse</a></code>

Methods:

- <code title="post /api/{account}/fans/{fan_id}/summary">client.fans.summary.<a href="./src/resources/fans/summary.ts">generateSummary</a>(fanID, { ...params }) -> SummaryGenerateSummaryResponse</code>
- <code title="get /api/{account}/fans/{fan_id}/summary">client.fans.summary.<a href="./src/resources/fans/summary.ts">getSummary</a>(fanID, { ...params }) -> SummaryGetSummaryResponse</code>

# Following

Types:

- <code><a href="./src/resources/following.ts">FollowingListActiveResponse</a></code>
- <code><a href="./src/resources/following.ts">FollowingListAllResponse</a></code>
- <code><a href="./src/resources/following.ts">FollowingListExpiredResponse</a></code>

Methods:

- <code title="get /api/{account}/following/active">client.following.<a href="./src/resources/following.ts">listActive</a>(account, { ...params }) -> FollowingListActiveResponse</code>
- <code title="get /api/{account}/following/all">client.following.<a href="./src/resources/following.ts">listAll</a>(account, { ...params }) -> FollowingListAllResponse</code>
- <code title="get /api/{account}/following/expired">client.following.<a href="./src/resources/following.ts">listExpired</a>(account, { ...params }) -> FollowingListExpiredResponse</code>

# TrialLinks

Types:

- <code><a href="./src/resources/trial-links/trial-links.ts">TrialLinkCreateResponse</a></code>
- <code><a href="./src/resources/trial-links/trial-links.ts">TrialLinkRetrieveResponse</a></code>
- <code><a href="./src/resources/trial-links/trial-links.ts">TrialLinkListResponse</a></code>
- <code><a href="./src/resources/trial-links/trial-links.ts">TrialLinkDeleteResponse</a></code>
- <code><a href="./src/resources/trial-links/trial-links.ts">TrialLinkListSpendersResponse</a></code>
- <code><a href="./src/resources/trial-links/trial-links.ts">TrialLinkListSubscribersResponse</a></code>
- <code><a href="./src/resources/trial-links/trial-links.ts">TrialLinkRetrieveStatsResponse</a></code>

Methods:

- <code title="post /api/{account}/trial-links">client.trialLinks.<a href="./src/resources/trial-links/trial-links.ts">create</a>(account, { ...params }) -> TrialLinkCreateResponse</code>
- <code title="get /api/{account}/trial-links/{trial_link_id}">client.trialLinks.<a href="./src/resources/trial-links/trial-links.ts">retrieve</a>(trialLinkID, { ...params }) -> TrialLinkRetrieveResponse</code>
- <code title="get /api/{account}/trial-links">client.trialLinks.<a href="./src/resources/trial-links/trial-links.ts">list</a>(account, { ...params }) -> TrialLinkListResponse</code>
- <code title="delete /api/{account}/trial-links/{trial_link_id}">client.trialLinks.<a href="./src/resources/trial-links/trial-links.ts">delete</a>(trialLinkID, { ...params }) -> TrialLinkDeleteResponse</code>
- <code title="get /api/{account}/trial-links/{trial_link_id}/spenders">client.trialLinks.<a href="./src/resources/trial-links/trial-links.ts">listSpenders</a>(trialLinkID, { ...params }) -> TrialLinkListSpendersResponse</code>
- <code title="get /api/{account}/trial-links/{trial_link_id}/subscribers">client.trialLinks.<a href="./src/resources/trial-links/trial-links.ts">listSubscribers</a>(trialLinkID, { ...params }) -> TrialLinkListSubscribersResponse</code>
- <code title="get /api/{account}/trial-links/{trial_link_id}/cohort-arps">client.trialLinks.<a href="./src/resources/trial-links/trial-links.ts">retrieveCohortArps</a>(trialLinkID, { ...params }) -> void</code>
- <code title="get /api/{account}/trial-links/{trial_link_id}/stats">client.trialLinks.<a href="./src/resources/trial-links/trial-links.ts">retrieveStats</a>(trialLinkID, { ...params }) -> TrialLinkRetrieveStatsResponse</code>

## Tags

Types:

- <code><a href="./src/resources/trial-links/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/trial-links/tags.ts">TagAddResponse</a></code>
- <code><a href="./src/resources/trial-links/tags.ts">TagRemoveResponse</a></code>

Methods:

- <code title="get /api/{account}/trial-links/{trial_link_id}/tags">client.trialLinks.tags.<a href="./src/resources/trial-links/tags.ts">list</a>(trialLinkID, { ...params }) -> TagListResponse</code>
- <code title="post /api/{account}/trial-links/{trial_link_id}/tags">client.trialLinks.tags.<a href="./src/resources/trial-links/tags.ts">add</a>(trialLinkID, { ...params }) -> TagAddResponse</code>
- <code title="delete /api/{account}/trial-links/{trial_link_id}/tags">client.trialLinks.tags.<a href="./src/resources/trial-links/tags.ts">remove</a>(trialLinkID, { ...params }) -> TagRemoveResponse</code>

# Giphy

Types:

- <code><a href="./src/resources/giphy.ts">GiphyListTrendingResponse</a></code>
- <code><a href="./src/resources/giphy.ts">GiphySearchResponse</a></code>

Methods:

- <code title="get /api/{account}/giphy/trending">client.giphy.<a href="./src/resources/giphy.ts">listTrending</a>(account, { ...params }) -> GiphyListTrendingResponse</code>
- <code title="get /api/{account}/giphy/search">client.giphy.<a href="./src/resources/giphy.ts">search</a>(account, { ...params }) -> GiphySearchResponse</code>

# LinkTags

Types:

- <code><a href="./src/resources/link-tags.ts">LinkTagListResponse</a></code>

Methods:

- <code title="get /api/link-tags">client.linkTags.<a href="./src/resources/link-tags.ts">list</a>({ ...params }) -> LinkTagListResponse</code>

# MassMessaging

Types:

- <code><a href="./src/resources/mass-messaging.ts">MassMessagingRetrieveResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingUpdateResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingListResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingDeleteResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingRetrieveOverviewResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingSendResponse</a></code>

Methods:

- <code title="get /api/{account}/mass-messaging/{id}">client.massMessaging.<a href="./src/resources/mass-messaging.ts">retrieve</a>(id, { ...params }) -> MassMessagingRetrieveResponse</code>
- <code title="put /api/{account}/mass-messaging/{id}">client.massMessaging.<a href="./src/resources/mass-messaging.ts">update</a>(id, { ...params }) -> MassMessagingUpdateResponse</code>
- <code title="get /api/{account}/mass-messaging">client.massMessaging.<a href="./src/resources/mass-messaging.ts">list</a>(account) -> MassMessagingListResponse</code>
- <code title="delete /api/{account}/mass-messaging/{id}">client.massMessaging.<a href="./src/resources/mass-messaging.ts">delete</a>(id, { ...params }) -> MassMessagingDeleteResponse</code>
- <code title="get /api/{account}/mass-messaging/overview">client.massMessaging.<a href="./src/resources/mass-messaging.ts">retrieveOverview</a>(account, { ...params }) -> MassMessagingRetrieveOverviewResponse</code>
- <code title="post /api/{account}/mass-messaging">client.massMessaging.<a href="./src/resources/mass-messaging.ts">send</a>(account, { ...params }) -> MassMessagingSendResponse</code>

# Media

Types:

- <code><a href="./src/resources/media/media.ts">MediaDownloadResponse</a></code>
- <code><a href="./src/resources/media/media.ts">MediaScrapeResponse</a></code>
- <code><a href="./src/resources/media/media.ts">MediaUploadResponse</a></code>

Methods:

- <code title="get /api/{account}/media/download/{cdnUrl}">client.media.<a href="./src/resources/media/media.ts">download</a>(cdnURL, { ...params }) -> string</code>
- <code title="post /api/{account}/media/scrape">client.media.<a href="./src/resources/media/media.ts">scrape</a>(account, { ...params }) -> MediaScrapeResponse</code>
- <code title="post /api/{account}/media/upload">client.media.<a href="./src/resources/media/media.ts">upload</a>(account, { ...params }) -> MediaUploadResponse</code>

## Uploads

Types:

- <code><a href="./src/resources/media/uploads.ts">UploadGetStatusResponse</a></code>

Methods:

- <code title="get /api/{account}/media/uploads/{upload}/status">client.media.uploads.<a href="./src/resources/media/uploads.ts">getStatus</a>(upload, { ...params }) -> UploadGetStatusResponse</code>

## Vault

Types:

- <code><a href="./src/resources/media/vault/vault.ts">VaultRetrieveResponse</a></code>
- <code><a href="./src/resources/media/vault/vault.ts">VaultListResponse</a></code>
- <code><a href="./src/resources/media/vault/vault.ts">VaultDeleteResponse</a></code>
- <code><a href="./src/resources/media/vault/vault.ts">VaultUploadResponse</a></code>

Methods:

- <code title="get /api/{account}/media/vault/{media_id}">client.media.vault.<a href="./src/resources/media/vault/vault.ts">retrieve</a>(mediaID, { ...params }) -> VaultRetrieveResponse</code>
- <code title="get /api/{account}/media/vault">client.media.vault.<a href="./src/resources/media/vault/vault.ts">list</a>(account, { ...params }) -> VaultListResponse</code>
- <code title="delete /api/{account}/media/vault/delete-media">client.media.vault.<a href="./src/resources/media/vault/vault.ts">delete</a>(account, { ...params }) -> VaultDeleteResponse</code>
- <code title="post /api/{account}/media/vault">client.media.vault.<a href="./src/resources/media/vault/vault.ts">upload</a>(account, { ...params }) -> VaultUploadResponse</code>

### Lists

Types:

- <code><a href="./src/resources/media/vault/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/media/vault/lists/lists.ts">ListRetrieveResponse</a></code>
- <code><a href="./src/resources/media/vault/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/media/vault/lists/lists.ts">ListListResponse</a></code>
- <code><a href="./src/resources/media/vault/lists/lists.ts">ListDeleteResponse</a></code>

Methods:

- <code title="post /api/{account}/media/vault/lists">client.media.vault.lists.<a href="./src/resources/media/vault/lists/lists.ts">create</a>(account, { ...params }) -> ListCreateResponse</code>
- <code title="get /api/{account}/media/vault/lists/{list_id}">client.media.vault.lists.<a href="./src/resources/media/vault/lists/lists.ts">retrieve</a>(listID, { ...params }) -> ListRetrieveResponse</code>
- <code title="put /api/{account}/media/vault/lists/{list_id}">client.media.vault.lists.<a href="./src/resources/media/vault/lists/lists.ts">update</a>(listID, { ...params }) -> ListUpdateResponse</code>
- <code title="get /api/{account}/media/vault/lists">client.media.vault.lists.<a href="./src/resources/media/vault/lists/lists.ts">list</a>(account, { ...params }) -> ListListResponse</code>
- <code title="delete /api/{account}/media/vault/lists/{list_id}">client.media.vault.lists.<a href="./src/resources/media/vault/lists/lists.ts">delete</a>(listID, { ...params }) -> ListDeleteResponse</code>

#### Media

Types:

- <code><a href="./src/resources/media/vault/lists/media.ts">MediaAddResponse</a></code>
- <code><a href="./src/resources/media/vault/lists/media.ts">MediaRemoveResponse</a></code>

Methods:

- <code title="post /api/{account}/media/vault/lists/{list_id}/media">client.media.vault.lists.media.<a href="./src/resources/media/vault/lists/media.ts">add</a>(listID, { ...params }) -> MediaAddResponse</code>
- <code title="delete /api/{account}/media/vault/lists/{list_id}/media">client.media.vault.lists.media.<a href="./src/resources/media/vault/lists/media.ts">remove</a>(listID, { ...params }) -> MediaRemoveResponse</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications/notifications.ts">NotificationListResponse</a></code>
- <code><a href="./src/resources/notifications/notifications.ts">NotificationGetCountsResponse</a></code>
- <code><a href="./src/resources/notifications/notifications.ts">NotificationMarkAllAsReadResponse</a></code>
- <code><a href="./src/resources/notifications/notifications.ts">NotificationSearchUsersResponse</a></code>

Methods:

- <code title="get /api/{account}/notifications">client.notifications.<a href="./src/resources/notifications/notifications.ts">list</a>(account, { ...params }) -> NotificationListResponse</code>
- <code title="get /api/{account}/notifications/counts">client.notifications.<a href="./src/resources/notifications/notifications.ts">getCounts</a>(account) -> NotificationGetCountsResponse</code>
- <code title="post /api/{account}/notifications/mark-all-as-read">client.notifications.<a href="./src/resources/notifications/notifications.ts">markAllAsRead</a>(account) -> NotificationMarkAllAsReadResponse</code>
- <code title="get /api/{account}/notifications/search-users">client.notifications.<a href="./src/resources/notifications/notifications.ts">searchUsers</a>(account, { ...params }) -> NotificationSearchUsersResponse</code>

## TabsOrder

Types:

- <code><a href="./src/resources/notifications/tabs-order.ts">TabsOrderUpdateResponse</a></code>
- <code><a href="./src/resources/notifications/tabs-order.ts">TabsOrderGetResponse</a></code>

Methods:

- <code title="put /api/{account}/notifications/tabs-order">client.notifications.tabsOrder.<a href="./src/resources/notifications/tabs-order.ts">update</a>(account, { ...params }) -> TabsOrderUpdateResponse</code>
- <code title="get /api/{account}/notifications/tabs-order">client.notifications.tabsOrder.<a href="./src/resources/notifications/tabs-order.ts">get</a>(account) -> TabsOrderGetResponse</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PayoutListRequestsResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRequestManualWithdrawalResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveBalancesResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveEarningStatisticsResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveEligibilityResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutUpdateFrequencyResponse</a></code>

Methods:

- <code title="get /api/{account}/payouts/payout-requests">client.payouts.<a href="./src/resources/payouts.ts">listRequests</a>(account, { ...params }) -> PayoutListRequestsResponse</code>
- <code title="post /api/{account}/payouts/request-manual-withdrawal">client.payouts.<a href="./src/resources/payouts.ts">requestManualWithdrawal</a>(account, { ...params }) -> PayoutRequestManualWithdrawalResponse</code>
- <code title="get /api/{account}/payouts/balances">client.payouts.<a href="./src/resources/payouts.ts">retrieveBalances</a>(account) -> PayoutRetrieveBalancesResponse</code>
- <code title="get /api/{account}/payouts/earning-statistics">client.payouts.<a href="./src/resources/payouts.ts">retrieveEarningStatistics</a>(account, { ...params }) -> PayoutRetrieveEarningStatisticsResponse</code>
- <code title="get /api/{account}/payouts/eligibility">client.payouts.<a href="./src/resources/payouts.ts">retrieveEligibility</a>(account) -> PayoutRetrieveEligibilityResponse</code>
- <code title="patch /api/{account}/payouts/payout-frequency">client.payouts.<a href="./src/resources/payouts.ts">updateFrequency</a>(account, { ...params }) -> PayoutUpdateFrequencyResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts/posts.ts">PostCreateResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostRetrieveResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostUpdateResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostListResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostDeleteResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostArchiveResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostPinResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostStatsResponse</a></code>
- <code><a href="./src/resources/posts/posts.ts">PostUnarchiveResponse</a></code>

Methods:

- <code title="post /api/{account}/posts">client.posts.<a href="./src/resources/posts/posts.ts">create</a>(account, { ...params }) -> PostCreateResponse</code>
- <code title="get /api/{account}/posts/{post_id}">client.posts.<a href="./src/resources/posts/posts.ts">retrieve</a>(postID, { ...params }) -> PostRetrieveResponse</code>
- <code title="put /api/{account}/posts/{post_id}">client.posts.<a href="./src/resources/posts/posts.ts">update</a>(postID, { ...params }) -> string</code>
- <code title="get /api/{account}/posts">client.posts.<a href="./src/resources/posts/posts.ts">list</a>(account, { ...params }) -> PostListResponse</code>
- <code title="delete /api/{account}/posts/{post_id}">client.posts.<a href="./src/resources/posts/posts.ts">delete</a>(postID, { ...params }) -> PostDeleteResponse</code>
- <code title="post /api/{account}/posts/{post_id}/archive">client.posts.<a href="./src/resources/posts/posts.ts">archive</a>(postID, { ...params }) -> PostArchiveResponse</code>
- <code title="post /api/{account}/posts/{post_id}/pin">client.posts.<a href="./src/resources/posts/posts.ts">pin</a>(postID, { ...params }) -> PostPinResponse</code>
- <code title="get /api/{account}/posts/{post_id}/stats">client.posts.<a href="./src/resources/posts/posts.ts">stats</a>(postID, { ...params }) -> PostStatsResponse</code>
- <code title="post /api/{account}/posts/{post_id}/unarchive">client.posts.<a href="./src/resources/posts/posts.ts">unarchive</a>(postID, { ...params }) -> PostUnarchiveResponse</code>

## Comments

Types:

- <code><a href="./src/resources/posts/comments.ts">CommentCreateResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentListResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentDeleteResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentLikeResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentPinResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentUnlikeResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentUnpinResponse</a></code>

Methods:

- <code title="post /api/{account}/posts/{post_id}/comments">client.posts.comments.<a href="./src/resources/posts/comments.ts">create</a>(postID, { ...params }) -> CommentCreateResponse</code>
- <code title="get /api/{account}/posts/{post_id}/comments">client.posts.comments.<a href="./src/resources/posts/comments.ts">list</a>(postID, { ...params }) -> CommentListResponse</code>
- <code title="delete /api/{account}/posts/{post_id}/comments/{comment_id}">client.posts.comments.<a href="./src/resources/posts/comments.ts">delete</a>(commentID, { ...params }) -> CommentDeleteResponse</code>
- <code title="post /api/{account}/posts/{post_id}/comments/{comment_id}/like">client.posts.comments.<a href="./src/resources/posts/comments.ts">like</a>(commentID, { ...params }) -> CommentLikeResponse</code>
- <code title="post /api/{account}/posts/{post_id}/comments/{comment_id}/pin">client.posts.comments.<a href="./src/resources/posts/comments.ts">pin</a>(commentID, { ...params }) -> CommentPinResponse</code>
- <code title="delete /api/{account}/posts/{post_id}/comments/{comment_id}/like">client.posts.comments.<a href="./src/resources/posts/comments.ts">unlike</a>(commentID, { ...params }) -> CommentUnlikeResponse</code>
- <code title="delete /api/{account}/posts/{post_id}/comments/{comment_id}/pin">client.posts.comments.<a href="./src/resources/posts/comments.ts">unpin</a>(commentID, { ...params }) -> CommentUnpinResponse</code>

## Labels

Types:

- <code><a href="./src/resources/posts/labels.ts">LabelCreateResponse</a></code>
- <code><a href="./src/resources/posts/labels.ts">LabelListResponse</a></code>

Methods:

- <code title="post /api/{account}/posts/labels">client.posts.labels.<a href="./src/resources/posts/labels.ts">create</a>(account, { ...params }) -> LabelCreateResponse</code>
- <code title="get /api/{account}/posts/labels">client.posts.labels.<a href="./src/resources/posts/labels.ts">list</a>(account, { ...params }) -> LabelListResponse</code>

# Promotions

Types:

- <code><a href="./src/resources/promotions.ts">PromotionCreateResponse</a></code>
- <code><a href="./src/resources/promotions.ts">PromotionListResponse</a></code>
- <code><a href="./src/resources/promotions.ts">PromotionDeleteResponse</a></code>
- <code><a href="./src/resources/promotions.ts">PromotionStopResponse</a></code>

Methods:

- <code title="post /api/{account}/promotions">client.promotions.<a href="./src/resources/promotions.ts">create</a>(account, { ...params }) -> PromotionCreateResponse</code>
- <code title="get /api/{account}/promotions">client.promotions.<a href="./src/resources/promotions.ts">list</a>(account, { ...params }) -> PromotionListResponse</code>
- <code title="delete /api/{account}/promotions/{promotion_id}">client.promotions.<a href="./src/resources/promotions.ts">delete</a>(promotionID, { ...params }) -> PromotionDeleteResponse</code>
- <code title="post /api/{account}/promotions/{promotion_id}/stop">client.promotions.<a href="./src/resources/promotions.ts">stop</a>(promotionID, { ...params }) -> PromotionStopResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">ProfileRetrieveResponse</a></code>

Methods:

- <code title="get /api/profiles/{username}">client.profiles.<a href="./src/resources/profiles.ts">retrieve</a>(username, { ...params }) -> ProfileRetrieveResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchProfilesResponse</a></code>

Methods:

- <code title="get /api/search">client.search.<a href="./src/resources/search.ts">profiles</a>({ ...params }) -> SearchProfilesResponse</code>

# Queue

Types:

- <code><a href="./src/resources/queue.ts">QueueListResponse</a></code>
- <code><a href="./src/resources/queue.ts">QueueCountResponse</a></code>
- <code><a href="./src/resources/queue.ts">QueuePublishResponse</a></code>

Methods:

- <code title="get /api/{account}/queue">client.queue.<a href="./src/resources/queue.ts">list</a>(account, { ...params }) -> QueueListResponse</code>
- <code title="get /api/{account}/queue/counts">client.queue.<a href="./src/resources/queue.ts">count</a>(account, { ...params }) -> QueueCountResponse</code>
- <code title="put /api/{account}/queue/{queue_id}/publish">client.queue.<a href="./src/resources/queue.ts">publish</a>(queueID, { ...params }) -> QueuePublishResponse</code>

# ReleaseForms

Types:

- <code><a href="./src/resources/release-forms.ts">ReleaseFormCreateInvitationLinkResponse</a></code>
- <code><a href="./src/resources/release-forms.ts">ReleaseFormCreateReleaseFormResponse</a></code>
- <code><a href="./src/resources/release-forms.ts">ReleaseFormListTaggableUsersResponse</a></code>

Methods:

- <code title="post /api/{account}/release-forms/create-invitation-link">client.releaseForms.<a href="./src/resources/release-forms.ts">createInvitationLink</a>(account, { ...params }) -> ReleaseFormCreateInvitationLinkResponse</code>
- <code title="post /api/{account}/release-forms/create-release-form">client.releaseForms.<a href="./src/resources/release-forms.ts">createReleaseForm</a>(account, { ...params }) -> ReleaseFormCreateReleaseFormResponse</code>
- <code title="get /api/{account}/release-forms/taggable-users">client.releaseForms.<a href="./src/resources/release-forms.ts">listTaggableUsers</a>(account, { ...params }) -> ReleaseFormListTaggableUsersResponse</code>

# SavedForLater

## Messages

Types:

- <code><a href="./src/resources/saved-for-later/messages/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="get /api/{account}/saved-for-later/messages">client.savedForLater.messages.<a href="./src/resources/saved-for-later/messages/messages.ts">list</a>(account, { ...params }) -> MessageListResponse</code>

### Settings

Types:

- <code><a href="./src/resources/saved-for-later/messages/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/saved-for-later/messages/settings.ts">SettingDisableAutomaticMessagingResponse</a></code>
- <code><a href="./src/resources/saved-for-later/messages/settings.ts">SettingEnableOrUpdateAutomaticMessagingResponse</a></code>

Methods:

- <code title="get /api/{account}/saved-for-later/messages/settings">client.savedForLater.messages.settings.<a href="./src/resources/saved-for-later/messages/settings.ts">retrieve</a>(account) -> SettingRetrieveResponse</code>
- <code title="patch /api/{account}/saved-for-later/messages/settings/disable-automatic-messaging">client.savedForLater.messages.settings.<a href="./src/resources/saved-for-later/messages/settings.ts">disableAutomaticMessaging</a>(account) -> SettingDisableAutomaticMessagingResponse</code>
- <code title="patch /api/{account}/saved-for-later/messages/settings/enable-or-update-automatic-messaging">client.savedForLater.messages.settings.<a href="./src/resources/saved-for-later/messages/settings.ts">enableOrUpdateAutomaticMessaging</a>(account, { ...params }) -> SettingEnableOrUpdateAutomaticMessagingResponse</code>

## Posts

Types:

- <code><a href="./src/resources/saved-for-later/posts/posts.ts">PostListResponse</a></code>

Methods:

- <code title="get /api/{account}/saved-for-later/posts">client.savedForLater.posts.<a href="./src/resources/saved-for-later/posts/posts.ts">list</a>(account, { ...params }) -> PostListResponse</code>

### Settings

Types:

- <code><a href="./src/resources/saved-for-later/posts/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/saved-for-later/posts/settings.ts">SettingDisableAutomaticPostingResponse</a></code>
- <code><a href="./src/resources/saved-for-later/posts/settings.ts">SettingEnableOrUpdateAutomaticPostingResponse</a></code>

Methods:

- <code title="get /api/{account}/saved-for-later/posts/settings">client.savedForLater.posts.settings.<a href="./src/resources/saved-for-later/posts/settings.ts">retrieve</a>(account) -> SettingRetrieveResponse</code>
- <code title="patch /api/{account}/saved-for-later/posts/settings/disable-automatic-posting">client.savedForLater.posts.settings.<a href="./src/resources/saved-for-later/posts/settings.ts">disableAutomaticPosting</a>(account) -> SettingDisableAutomaticPostingResponse</code>
- <code title="patch /api/{account}/saved-for-later/posts/settings/enable-or-update-automatic-posting">client.savedForLater.posts.settings.<a href="./src/resources/saved-for-later/posts/settings.ts">enableOrUpdateAutomaticPosting</a>(account, { ...params }) -> SettingEnableOrUpdateAutomaticPostingResponse</code>

# Settings

Types:

- <code><a href="./src/resources/settings/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/settings/settings.ts">SettingCheckUsernameAvailabilityResponse</a></code>
- <code><a href="./src/resources/settings/settings.ts">SettingUpdateProfileResponse</a></code>
- <code><a href="./src/resources/settings/settings.ts">SettingUpdateSubscriptionPriceResponse</a></code>

Methods:

- <code title="get /api/{account}/settings">client.settings.<a href="./src/resources/settings/settings.ts">retrieve</a>(account) -> SettingRetrieveResponse</code>
- <code title="post /api/{account}/settings/username-exists">client.settings.<a href="./src/resources/settings/settings.ts">checkUsernameAvailability</a>(account, { ...params }) -> SettingCheckUsernameAvailabilityResponse</code>
- <code title="post /api/{account}/settings/profile">client.settings.<a href="./src/resources/settings/settings.ts">updateProfile</a>(account, { ...params }) -> SettingUpdateProfileResponse</code>
- <code title="patch /api/{account}/settings/subscription-price">client.settings.<a href="./src/resources/settings/settings.ts">updateSubscriptionPrice</a>(account, { ...params }) -> SettingUpdateSubscriptionPriceResponse</code>

## BlockedCountries

Types:

- <code><a href="./src/resources/settings/blocked-countries.ts">BlockedCountryRetrieveResponse</a></code>
- <code><a href="./src/resources/settings/blocked-countries.ts">BlockedCountryUpdateResponse</a></code>

Methods:

- <code title="get /api/{account}/settings/blocked-countries">client.settings.blockedCountries.<a href="./src/resources/settings/blocked-countries.ts">retrieve</a>(account) -> BlockedCountryRetrieveResponse</code>
- <code title="put /api/{account}/settings/blocked-countries">client.settings.blockedCountries.<a href="./src/resources/settings/blocked-countries.ts">update</a>(account, { ...params }) -> BlockedCountryUpdateResponse</code>

## WelcomeMessage

Types:

- <code><a href="./src/resources/settings/welcome-message.ts">WelcomeMessageRetrieveResponse</a></code>
- <code><a href="./src/resources/settings/welcome-message.ts">WelcomeMessageUpdateResponse</a></code>
- <code><a href="./src/resources/settings/welcome-message.ts">WelcomeMessageToggleResponse</a></code>

Methods:

- <code title="get /api/{account}/settings/welcome-message">client.settings.welcomeMessage.<a href="./src/resources/settings/welcome-message.ts">retrieve</a>(account) -> WelcomeMessageRetrieveResponse</code>
- <code title="post /api/{account}/settings/welcome-message">client.settings.welcomeMessage.<a href="./src/resources/settings/welcome-message.ts">update</a>(account, { ...params }) -> WelcomeMessageUpdateResponse</code>
- <code title="patch /api/{account}/settings/welcome-message">client.settings.welcomeMessage.<a href="./src/resources/settings/welcome-message.ts">toggle</a>(account, { ...params }) -> WelcomeMessageToggleResponse</code>

## SocialMediaButtons

Types:

- <code><a href="./src/resources/settings/social-media-buttons.ts">SocialMediaButtonUpdateResponse</a></code>
- <code><a href="./src/resources/settings/social-media-buttons.ts">SocialMediaButtonListResponse</a></code>
- <code><a href="./src/resources/settings/social-media-buttons.ts">SocialMediaButtonDeleteResponse</a></code>
- <code><a href="./src/resources/settings/social-media-buttons.ts">SocialMediaButtonAddResponse</a></code>
- <code><a href="./src/resources/settings/social-media-buttons.ts">SocialMediaButtonReorderResponse</a></code>

Methods:

- <code title="put /api/{account}/settings/social-media-buttons/{button_id}">client.settings.socialMediaButtons.<a href="./src/resources/settings/social-media-buttons.ts">update</a>(buttonID, { ...params }) -> SocialMediaButtonUpdateResponse</code>
- <code title="get /api/{account}/settings/social-media-buttons">client.settings.socialMediaButtons.<a href="./src/resources/settings/social-media-buttons.ts">list</a>(account) -> SocialMediaButtonListResponse</code>
- <code title="delete /api/{account}/settings/social-media-buttons/{button_id}">client.settings.socialMediaButtons.<a href="./src/resources/settings/social-media-buttons.ts">delete</a>(buttonID, { ...params }) -> SocialMediaButtonDeleteResponse</code>
- <code title="post /api/{account}/settings/social-media-buttons">client.settings.socialMediaButtons.<a href="./src/resources/settings/social-media-buttons.ts">add</a>(account, { ...params }) -> SocialMediaButtonAddResponse</code>
- <code title="post /api/{account}/settings/social-media-buttons/reorder">client.settings.socialMediaButtons.<a href="./src/resources/settings/social-media-buttons.ts">reorder</a>(account, { ...params }) -> SocialMediaButtonReorderResponse</code>

# SharedTrialLinks

Types:

- <code><a href="./src/resources/shared-trial-links/shared-trial-links.ts">SharedTrialLinkListResponse</a></code>
- <code><a href="./src/resources/shared-trial-links/shared-trial-links.ts">SharedTrialLinkRevokeAccessResponse</a></code>

Methods:

- <code title="get /api/{account}/shared-trial-links">client.sharedTrialLinks.<a href="./src/resources/shared-trial-links/shared-trial-links.ts">list</a>(account, { ...params }) -> SharedTrialLinkListResponse</code>
- <code title="delete /api/{account}/shared-trial-links/{shared_trial_link_id}">client.sharedTrialLinks.<a href="./src/resources/shared-trial-links/shared-trial-links.ts">revokeAccess</a>(sharedTrialLinkID, { ...params }) -> SharedTrialLinkRevokeAccessResponse</code>

## Tags

Types:

- <code><a href="./src/resources/shared-trial-links/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/shared-trial-links/tags.ts">TagAddResponse</a></code>
- <code><a href="./src/resources/shared-trial-links/tags.ts">TagRemoveResponse</a></code>

Methods:

- <code title="get /api/{account}/shared-trial-links/{shared_trial_link_id}/tags">client.sharedTrialLinks.tags.<a href="./src/resources/shared-trial-links/tags.ts">list</a>(sharedTrialLinkID, { ...params }) -> TagListResponse</code>
- <code title="post /api/{account}/shared-trial-links/{shared_trial_link_id}/tags">client.sharedTrialLinks.tags.<a href="./src/resources/shared-trial-links/tags.ts">add</a>(sharedTrialLinkID, { ...params }) -> TagAddResponse</code>
- <code title="delete /api/{account}/shared-trial-links/{shared_trial_link_id}/tags">client.sharedTrialLinks.tags.<a href="./src/resources/shared-trial-links/tags.ts">remove</a>(sharedTrialLinkID, { ...params }) -> TagRemoveResponse</code>

# SharedTrackingLinks

Types:

- <code><a href="./src/resources/shared-tracking-links/shared-tracking-links.ts">SharedTrackingLinkListResponse</a></code>
- <code><a href="./src/resources/shared-tracking-links/shared-tracking-links.ts">SharedTrackingLinkRevokeAccessResponse</a></code>

Methods:

- <code title="get /api/{account}/shared-tracking-links">client.sharedTrackingLinks.<a href="./src/resources/shared-tracking-links/shared-tracking-links.ts">list</a>(account, { ...params }) -> SharedTrackingLinkListResponse</code>
- <code title="delete /api/{account}/shared-tracking-links/{shared_tracking_link_id}">client.sharedTrackingLinks.<a href="./src/resources/shared-tracking-links/shared-tracking-links.ts">revokeAccess</a>(sharedTrackingLinkID, { ...params }) -> SharedTrackingLinkRevokeAccessResponse</code>

## Tags

Types:

- <code><a href="./src/resources/shared-tracking-links/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/shared-tracking-links/tags.ts">TagAddResponse</a></code>
- <code><a href="./src/resources/shared-tracking-links/tags.ts">TagRemoveResponse</a></code>

Methods:

- <code title="get /api/{account}/shared-tracking-links/{shared_tracking_link_id}/tags">client.sharedTrackingLinks.tags.<a href="./src/resources/shared-tracking-links/tags.ts">list</a>(sharedTrackingLinkID, { ...params }) -> TagListResponse</code>
- <code title="post /api/{account}/shared-tracking-links/{shared_tracking_link_id}/tags">client.sharedTrackingLinks.tags.<a href="./src/resources/shared-tracking-links/tags.ts">add</a>(sharedTrackingLinkID, { ...params }) -> TagAddResponse</code>
- <code title="delete /api/{account}/shared-tracking-links/{shared_tracking_link_id}/tags">client.sharedTrackingLinks.tags.<a href="./src/resources/shared-tracking-links/tags.ts">remove</a>(sharedTrackingLinkID, { ...params }) -> TagRemoveResponse</code>

# SmartLinkPostbacks

Types:

- <code><a href="./src/resources/smart-link-postbacks.ts">SmartLinkPostbackCreateResponse</a></code>
- <code><a href="./src/resources/smart-link-postbacks.ts">SmartLinkPostbackRetrieveResponse</a></code>
- <code><a href="./src/resources/smart-link-postbacks.ts">SmartLinkPostbackUpdateResponse</a></code>
- <code><a href="./src/resources/smart-link-postbacks.ts">SmartLinkPostbackListResponse</a></code>
- <code><a href="./src/resources/smart-link-postbacks.ts">SmartLinkPostbackDeleteResponse</a></code>

Methods:

- <code title="post /api/smart-link-postbacks">client.smartLinkPostbacks.<a href="./src/resources/smart-link-postbacks.ts">create</a>({ ...params }) -> SmartLinkPostbackCreateResponse</code>
- <code title="get /api/smart-link-postbacks/{postback_id}">client.smartLinkPostbacks.<a href="./src/resources/smart-link-postbacks.ts">retrieve</a>(postbackID) -> SmartLinkPostbackRetrieveResponse</code>
- <code title="patch /api/smart-link-postbacks/{postback_id}">client.smartLinkPostbacks.<a href="./src/resources/smart-link-postbacks.ts">update</a>(postbackID, { ...params }) -> SmartLinkPostbackUpdateResponse</code>
- <code title="get /api/smart-link-postbacks">client.smartLinkPostbacks.<a href="./src/resources/smart-link-postbacks.ts">list</a>() -> SmartLinkPostbackListResponse</code>
- <code title="delete /api/smart-link-postbacks/{postback_id}">client.smartLinkPostbacks.<a href="./src/resources/smart-link-postbacks.ts">delete</a>(postbackID) -> SmartLinkPostbackDeleteResponse | null</code>

# SmartLinks

Types:

- <code><a href="./src/resources/smart-links.ts">SmartLinkCreateResponse</a></code>
- <code><a href="./src/resources/smart-links.ts">SmartLinkRetrieveResponse</a></code>
- <code><a href="./src/resources/smart-links.ts">SmartLinkListResponse</a></code>
- <code><a href="./src/resources/smart-links.ts">SmartLinkDeleteResponse</a></code>
- <code><a href="./src/resources/smart-links.ts">SmartLinkListClicksResponse</a></code>
- <code><a href="./src/resources/smart-links.ts">SmartLinkListConversionsResponse</a></code>
- <code><a href="./src/resources/smart-links.ts">SmartLinkListFansResponse</a></code>
- <code><a href="./src/resources/smart-links.ts">SmartLinkListSpendersResponse</a></code>
- <code><a href="./src/resources/smart-links.ts">SmartLinkRetrieveStatsResponse</a></code>

Methods:

- <code title="post /api/smart-links">client.smartLinks.<a href="./src/resources/smart-links.ts">create</a>({ ...params }) -> SmartLinkCreateResponse</code>
- <code title="get /api/smart-links/{smart_link_id}">client.smartLinks.<a href="./src/resources/smart-links.ts">retrieve</a>(smartLinkID) -> SmartLinkRetrieveResponse</code>
- <code title="get /api/smart-links">client.smartLinks.<a href="./src/resources/smart-links.ts">list</a>({ ...params }) -> SmartLinkListResponse</code>
- <code title="delete /api/smart-links/{smart_link_id}">client.smartLinks.<a href="./src/resources/smart-links.ts">delete</a>(smartLinkID) -> SmartLinkDeleteResponse</code>
- <code title="get /api/smart-links/{smart_link_id}/clicks">client.smartLinks.<a href="./src/resources/smart-links.ts">listClicks</a>(smartLinkID, { ...params }) -> SmartLinkListClicksResponse</code>
- <code title="get /api/smart-links/{smart_link_id}/conversions">client.smartLinks.<a href="./src/resources/smart-links.ts">listConversions</a>(smartLinkID, { ...params }) -> SmartLinkListConversionsResponse</code>
- <code title="get /api/smart-links/{smart_link_id}/fans">client.smartLinks.<a href="./src/resources/smart-links.ts">listFans</a>(smartLinkID, { ...params }) -> SmartLinkListFansResponse</code>
- <code title="get /api/smart-links/{smart_link_id}/spenders">client.smartLinks.<a href="./src/resources/smart-links.ts">listSpenders</a>(smartLinkID, { ...params }) -> SmartLinkListSpendersResponse</code>
- <code title="get /api/smart-links/{smart_link_id}/cohort-arps">client.smartLinks.<a href="./src/resources/smart-links.ts">retrieveCohortArps</a>(smartLinkID, { ...params }) -> void</code>
- <code title="get /api/smart-links/{smart_link_id}/stats">client.smartLinks.<a href="./src/resources/smart-links.ts">retrieveStats</a>(smartLinkID, { ...params }) -> SmartLinkRetrieveStatsResponse</code>

# Statistics

Types:

- <code><a href="./src/resources/statistics/statistics.ts">StatisticCalculateTotalTransactionsResponse</a></code>
- <code><a href="./src/resources/statistics/statistics.ts">StatisticGetOverviewResponse</a></code>
- <code><a href="./src/resources/statistics/statistics.ts">StatisticGetSubscriberMetricsResponse</a></code>

Methods:

- <code title="get /api/{account}/statistics/total-transactions">client.statistics.<a href="./src/resources/statistics/statistics.ts">calculateTotalTransactions</a>(account, { ...params }) -> StatisticCalculateTotalTransactionsResponse</code>
- <code title="get /api/{account}/statistics/overview">client.statistics.<a href="./src/resources/statistics/statistics.ts">getOverview</a>(account, { ...params }) -> StatisticGetOverviewResponse</code>
- <code title="get /api/{account}/statistics/subscriber-metrics">client.statistics.<a href="./src/resources/statistics/statistics.ts">getSubscriberMetrics</a>(account, { ...params }) -> StatisticGetSubscriberMetricsResponse</code>

## Statements

Types:

- <code><a href="./src/resources/statistics/statements.ts">StatementGetEarningsResponse</a></code>

Methods:

- <code title="get /api/{account}/statistics/statements/earnings">client.statistics.statements.<a href="./src/resources/statistics/statements.ts">getEarnings</a>(account, { ...params }) -> StatementGetEarningsResponse</code>

## Reach

Types:

- <code><a href="./src/resources/statistics/reach.ts">ReachGetProfileVisitorsResponse</a></code>

Methods:

- <code title="get /api/{account}/statistics/reach/profile-visitors">client.statistics.reach.<a href="./src/resources/statistics/reach.ts">getProfileVisitors</a>(account, { ...params }) -> ReachGetProfileVisitorsResponse</code>

# Subscribers

Types:

- <code><a href="./src/resources/subscribers.ts">SubscriberRetrieveStatisticsResponse</a></code>

Methods:

- <code title="get /api/{account}/subscribers/statistics">client.subscribers.<a href="./src/resources/subscribers.ts">retrieveStatistics</a>(account, { ...params }) -> SubscriberRetrieveStatisticsResponse</code>

# Stored

Types:

- <code><a href="./src/resources/stored.ts">StoredListSharedTrackingLinksResponse</a></code>
- <code><a href="./src/resources/stored.ts">StoredListSharedTrialLinksResponse</a></code>
- <code><a href="./src/resources/stored.ts">StoredListTrackingLinksResponse</a></code>
- <code><a href="./src/resources/stored.ts">StoredListTrialLinksResponse</a></code>

Methods:

- <code title="get /api/{account}/stored/shared-tracking-links">client.stored.<a href="./src/resources/stored.ts">listSharedTrackingLinks</a>(account, { ...params }) -> StoredListSharedTrackingLinksResponse</code>
- <code title="get /api/{account}/stored/shared-trial-links">client.stored.<a href="./src/resources/stored.ts">listSharedTrialLinks</a>(account, { ...params }) -> StoredListSharedTrialLinksResponse</code>
- <code title="get /api/{account}/stored/tracking-links">client.stored.<a href="./src/resources/stored.ts">listTrackingLinks</a>(account, { ...params }) -> StoredListTrackingLinksResponse</code>
- <code title="get /api/{account}/stored/trial-links">client.stored.<a href="./src/resources/stored.ts">listTrialLinks</a>(account, { ...params }) -> StoredListTrialLinksResponse</code>

# Stories

Types:

- <code><a href="./src/resources/stories/stories.ts">StoryCreateResponse</a></code>
- <code><a href="./src/resources/stories/stories.ts">StoryRetrieveResponse</a></code>
- <code><a href="./src/resources/stories/stories.ts">StoryDeleteResponse</a></code>
- <code><a href="./src/resources/stories/stories.ts">StoryListActiveResponse</a></code>
- <code><a href="./src/resources/stories/stories.ts">StoryListArchiveResponse</a></code>
- <code><a href="./src/resources/stories/stories.ts">StoryListViewersResponse</a></code>
- <code><a href="./src/resources/stories/stories.ts">StoryMarkAsWatchedResponse</a></code>
- <code><a href="./src/resources/stories/stories.ts">StoryRetrieveStatsResponse</a></code>

Methods:

- <code title="post /api/{account}/stories">client.stories.<a href="./src/resources/stories/stories.ts">create</a>(account, { ...params }) -> StoryCreateResponse</code>
- <code title="get /api/{account}/stories/{story_id}">client.stories.<a href="./src/resources/stories/stories.ts">retrieve</a>(storyID, { ...params }) -> StoryRetrieveResponse</code>
- <code title="delete /api/{account}/stories/{story_id}">client.stories.<a href="./src/resources/stories/stories.ts">delete</a>(storyID, { ...params }) -> StoryDeleteResponse</code>
- <code title="get /api/{account}/stories">client.stories.<a href="./src/resources/stories/stories.ts">listActive</a>(account) -> StoryListActiveResponse</code>
- <code title="get /api/{account}/stories/archive">client.stories.<a href="./src/resources/stories/stories.ts">listArchive</a>(account, { ...params }) -> StoryListArchiveResponse</code>
- <code title="get /api/{account}/stories/{story_id}/viewers">client.stories.<a href="./src/resources/stories/stories.ts">listViewers</a>(storyID, { ...params }) -> StoryListViewersResponse</code>
- <code title="post /api/{account}/stories/{story_id}/mark-as-watched">client.stories.<a href="./src/resources/stories/stories.ts">markAsWatched</a>(storyID, { ...params }) -> StoryMarkAsWatchedResponse</code>
- <code title="get /api/{account}/stories/{story_id}/stats">client.stories.<a href="./src/resources/stories/stories.ts">retrieveStats</a>(storyID, { ...params }) -> StoryRetrieveStatsResponse</code>

## Highlights

Types:

- <code><a href="./src/resources/stories/highlights.ts">HighlightCreateResponse</a></code>
- <code><a href="./src/resources/stories/highlights.ts">HighlightRetrieveResponse</a></code>
- <code><a href="./src/resources/stories/highlights.ts">HighlightUpdateResponse</a></code>
- <code><a href="./src/resources/stories/highlights.ts">HighlightListResponse</a></code>
- <code><a href="./src/resources/stories/highlights.ts">HighlightDeleteResponse</a></code>
- <code><a href="./src/resources/stories/highlights.ts">HighlightAddStoryResponse</a></code>
- <code><a href="./src/resources/stories/highlights.ts">HighlightRemoveStoryResponse</a></code>

Methods:

- <code title="post /api/{account}/stories/highlights">client.stories.highlights.<a href="./src/resources/stories/highlights.ts">create</a>(account, { ...params }) -> HighlightCreateResponse</code>
- <code title="get /api/{account}/stories/highlights/{highlight_id}">client.stories.highlights.<a href="./src/resources/stories/highlights.ts">retrieve</a>(highlightID, { ...params }) -> HighlightRetrieveResponse</code>
- <code title="put /api/{account}/stories/highlights/{highlight_id}">client.stories.highlights.<a href="./src/resources/stories/highlights.ts">update</a>(highlightID, { ...params }) -> HighlightUpdateResponse</code>
- <code title="get /api/{account}/stories/highlights">client.stories.highlights.<a href="./src/resources/stories/highlights.ts">list</a>(account, { ...params }) -> HighlightListResponse</code>
- <code title="delete /api/{account}/stories/highlights/{highlight_id}">client.stories.highlights.<a href="./src/resources/stories/highlights.ts">delete</a>(highlightID, { ...params }) -> HighlightDeleteResponse</code>
- <code title="patch /api/{account}/stories/highlights/{highlight_id}/{story_id}">client.stories.highlights.<a href="./src/resources/stories/highlights.ts">addStory</a>(storyID, { ...params }) -> HighlightAddStoryResponse</code>
- <code title="delete /api/{account}/stories/highlights/{highlight_id}/{story_id}">client.stories.highlights.<a href="./src/resources/stories/highlights.ts">removeStory</a>(storyID, { ...params }) -> HighlightRemoveStoryResponse</code>

# Bundles

Types:

- <code><a href="./src/resources/bundles.ts">BundleCreateResponse</a></code>
- <code><a href="./src/resources/bundles.ts">BundleListResponse</a></code>
- <code><a href="./src/resources/bundles.ts">BundleDeleteResponse</a></code>

Methods:

- <code title="post /api/{account}/bundles">client.bundles.<a href="./src/resources/bundles.ts">create</a>(account, { ...params }) -> BundleCreateResponse</code>
- <code title="get /api/{account}/bundles">client.bundles.<a href="./src/resources/bundles.ts">list</a>(account) -> BundleListResponse</code>
- <code title="delete /api/{account}/bundles/{bundle_id}">client.bundles.<a href="./src/resources/bundles.ts">delete</a>(bundleID, { ...params }) -> BundleDeleteResponse</code>

# TrackingLinks

Types:

- <code><a href="./src/resources/tracking-links/tracking-links.ts">TrackingLinkCreateResponse</a></code>
- <code><a href="./src/resources/tracking-links/tracking-links.ts">TrackingLinkRetrieveResponse</a></code>
- <code><a href="./src/resources/tracking-links/tracking-links.ts">TrackingLinkListResponse</a></code>
- <code><a href="./src/resources/tracking-links/tracking-links.ts">TrackingLinkDeleteResponse</a></code>
- <code><a href="./src/resources/tracking-links/tracking-links.ts">TrackingLinkGetStatsResponse</a></code>
- <code><a href="./src/resources/tracking-links/tracking-links.ts">TrackingLinkListSpendersResponse</a></code>
- <code><a href="./src/resources/tracking-links/tracking-links.ts">TrackingLinkListSubscribersResponse</a></code>

Methods:

- <code title="post /api/{account}/tracking-links">client.trackingLinks.<a href="./src/resources/tracking-links/tracking-links.ts">create</a>(account, { ...params }) -> TrackingLinkCreateResponse</code>
- <code title="get /api/{account}/tracking-links/{tracking_link_id}">client.trackingLinks.<a href="./src/resources/tracking-links/tracking-links.ts">retrieve</a>(trackingLinkID, { ...params }) -> TrackingLinkRetrieveResponse</code>
- <code title="get /api/{account}/tracking-links">client.trackingLinks.<a href="./src/resources/tracking-links/tracking-links.ts">list</a>(account, { ...params }) -> TrackingLinkListResponse</code>
- <code title="delete /api/{account}/tracking-links/{tracking_link_id}">client.trackingLinks.<a href="./src/resources/tracking-links/tracking-links.ts">delete</a>(trackingLinkID, { ...params }) -> TrackingLinkDeleteResponse</code>
- <code title="get /api/{account}/tracking-links/{tracking_link_id}/cohort-arps">client.trackingLinks.<a href="./src/resources/tracking-links/tracking-links.ts">getCohortArps</a>(trackingLinkID, { ...params }) -> void</code>
- <code title="get /api/{account}/tracking-links/{tracking_link_id}/stats">client.trackingLinks.<a href="./src/resources/tracking-links/tracking-links.ts">getStats</a>(trackingLinkID, { ...params }) -> TrackingLinkGetStatsResponse</code>
- <code title="get /api/{account}/tracking-links/{tracking_link_id}/spenders">client.trackingLinks.<a href="./src/resources/tracking-links/tracking-links.ts">listSpenders</a>(trackingLinkID, { ...params }) -> TrackingLinkListSpendersResponse</code>
- <code title="get /api/{account}/tracking-links/{tracking_link_id}/subscribers">client.trackingLinks.<a href="./src/resources/tracking-links/tracking-links.ts">listSubscribers</a>(trackingLinkID, { ...params }) -> TrackingLinkListSubscribersResponse</code>

## Tags

Types:

- <code><a href="./src/resources/tracking-links/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/tracking-links/tags.ts">TagAddResponse</a></code>
- <code><a href="./src/resources/tracking-links/tags.ts">TagRemoveResponse</a></code>

Methods:

- <code title="get /api/{account}/tracking-links/{tracking_link_id}/tags">client.trackingLinks.tags.<a href="./src/resources/tracking-links/tags.ts">list</a>(trackingLinkID, { ...params }) -> TagListResponse</code>
- <code title="post /api/{account}/tracking-links/{tracking_link_id}/tags">client.trackingLinks.tags.<a href="./src/resources/tracking-links/tags.ts">add</a>(trackingLinkID, { ...params }) -> TagAddResponse</code>
- <code title="delete /api/{account}/tracking-links/{tracking_link_id}/tags">client.trackingLinks.tags.<a href="./src/resources/tracking-links/tags.ts">remove</a>(trackingLinkID, { ...params }) -> TagRemoveResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /api/{account}/transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>(account, { ...params }) -> TransactionListResponse</code>

# UserLists

Types:

- <code><a href="./src/resources/user-lists/user-lists.ts">UserListCreateResponse</a></code>
- <code><a href="./src/resources/user-lists/user-lists.ts">UserListRetrieveResponse</a></code>
- <code><a href="./src/resources/user-lists/user-lists.ts">UserListUpdateResponse</a></code>
- <code><a href="./src/resources/user-lists/user-lists.ts">UserListListResponse</a></code>
- <code><a href="./src/resources/user-lists/user-lists.ts">UserListDeleteResponse</a></code>

Methods:

- <code title="post /api/{account}/user-lists">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">create</a>(account, { ...params }) -> UserListCreateResponse</code>
- <code title="get /api/{account}/user-lists/{userListId}">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">retrieve</a>(userListID, { ...params }) -> UserListRetrieveResponse</code>
- <code title="put /api/{account}/user-lists/{userListId}">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">update</a>(userListID, { ...params }) -> UserListUpdateResponse</code>
- <code title="get /api/{account}/user-lists">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">list</a>(account, { ...params }) -> UserListListResponse</code>
- <code title="delete /api/{account}/user-lists/{userListId}">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">delete</a>(userListID, { ...params }) -> UserListDeleteResponse</code>

## Users

Types:

- <code><a href="./src/resources/user-lists/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/user-lists/users.ts">UserAddResponse</a></code>
- <code><a href="./src/resources/user-lists/users.ts">UserClearResponse</a></code>
- <code><a href="./src/resources/user-lists/users.ts">UserListPinnedResponse</a></code>
- <code><a href="./src/resources/user-lists/users.ts">UserPinResponse</a></code>
- <code><a href="./src/resources/user-lists/users.ts">UserRemoveResponse</a></code>

Methods:

- <code title="get /api/{account}/user-lists/{userListId}/users">client.userLists.users.<a href="./src/resources/user-lists/users.ts">list</a>(userListID, { ...params }) -> UserListResponse</code>
- <code title="post /api/{account}/user-lists/{userListId}/users">client.userLists.users.<a href="./src/resources/user-lists/users.ts">add</a>(userListID, { ...params }) -> UserAddResponse</code>
- <code title="delete /api/{account}/user-lists/{userListId}/users">client.userLists.users.<a href="./src/resources/user-lists/users.ts">clear</a>(userListID, { ...params }) -> UserClearResponse</code>
- <code title="get /api/{account}/user-lists/{userListId}/users/pinned">client.userLists.users.<a href="./src/resources/user-lists/users.ts">listPinned</a>(userListID, { ...params }) -> UserListPinnedResponse</code>
- <code title="post /api/{account}/user-lists/{userListId}/users/{userId}/pin">client.userLists.users.<a href="./src/resources/user-lists/users.ts">pin</a>(userID, { ...params }) -> UserPinResponse</code>
- <code title="delete /api/{account}/user-lists/{userListId}/users/{userId}">client.userLists.users.<a href="./src/resources/user-lists/users.ts">remove</a>(userID, { ...params }) -> UserRemoveResponse</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /api/{account}/users/{username}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(username, { ...params }) -> UserRetrieveResponse</code>
- <code title="get /api/{account}/users/list">client.users.<a href="./src/resources/users/users.ts">list</a>(account, { ...params }) -> UserListResponse</code>

## Restrict

Types:

- <code><a href="./src/resources/users/restrict.ts">RestrictCreateResponse</a></code>
- <code><a href="./src/resources/users/restrict.ts">RestrictDeleteResponse</a></code>

Methods:

- <code title="post /api/{account}/users/{user_id}/restrict">client.users.restrict.<a href="./src/resources/users/restrict.ts">create</a>(userID, { ...params }) -> RestrictCreateResponse</code>
- <code title="delete /api/{account}/users/{user_id}/restrict">client.users.restrict.<a href="./src/resources/users/restrict.ts">delete</a>(userID, { ...params }) -> RestrictDeleteResponse</code>

## Block

Types:

- <code><a href="./src/resources/users/block.ts">BlockCreateResponse</a></code>
- <code><a href="./src/resources/users/block.ts">BlockDeleteResponse</a></code>

Methods:

- <code title="post /api/{account}/users/{user_id}/block">client.users.block.<a href="./src/resources/users/block.ts">create</a>(userID, { ...params }) -> BlockCreateResponse</code>
- <code title="delete /api/{account}/users/{user_id}/block">client.users.block.<a href="./src/resources/users/block.ts">delete</a>(userID, { ...params }) -> BlockDeleteResponse</code>

## Subscribe

Types:

- <code><a href="./src/resources/users/subscribe.ts">SubscribeCreateResponse</a></code>
- <code><a href="./src/resources/users/subscribe.ts">SubscribeDeleteResponse</a></code>

Methods:

- <code title="post /api/{account}/users/{user_id}/subscribe">client.users.subscribe.<a href="./src/resources/users/subscribe.ts">create</a>(userID, { ...params }) -> SubscribeCreateResponse</code>
- <code title="delete /api/{account}/users/{user_id}/subscribe">client.users.subscribe.<a href="./src/resources/users/subscribe.ts">delete</a>(userID, { ...params }) -> SubscribeDeleteResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListEventsResponse</a></code>

Methods:

- <code title="post /api/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /api/webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(webhookID) -> WebhookRetrieveResponse</code>
- <code title="put /api/webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">update</a>(webhookID, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /api/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /api/webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(webhookID) -> WebhookDeleteResponse | null</code>
- <code title="get /api/webhooks/events">client.webhooks.<a href="./src/resources/webhooks.ts">listEvents</a>() -> WebhookListEventsResponse</code>
