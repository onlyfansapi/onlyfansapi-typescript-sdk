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
- <code title="delete /api/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">disconnect</a>(id) -> unknown</code>

# Me

Types:

- <code><a href="./src/resources/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/me.ts">MeGetModelStartDateResponse</a></code>

Methods:

- <code title="get /api/{account}/me">client.me.<a href="./src/resources/me.ts">retrieve</a>(account) -> MeRetrieveResponse</code>
- <code title="get /api/{account}/me/model-start-date">client.me.<a href="./src/resources/me.ts">getModelStartDate</a>(account) -> MeGetModelStartDateResponse</code>

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

# Chats

Types:

- <code><a href="./src/resources/chats/chats.ts">ChatListResponse</a></code>
- <code><a href="./src/resources/chats/chats.ts">ChatStartTypingIndicatorResponse</a></code>

Methods:

- <code title="get /api/{account}/chats">client.chats.<a href="./src/resources/chats/chats.ts">list</a>(account, { ...params }) -> ChatListResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/typing">client.chats.<a href="./src/resources/chats/chats.ts">startTypingIndicator</a>(chatID, { ...params }) -> ChatStartTypingIndicatorResponse</code>

## Messages

Types:

- <code><a href="./src/resources/chats/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageDeleteResponse</a></code>
- <code><a href="./src/resources/chats/messages.ts">MessageSendResponse</a></code>

Methods:

- <code title="get /api/{account}/chats/{chat_id}/messages">client.chats.messages.<a href="./src/resources/chats/messages.ts">list</a>(chatID, { ...params }) -> MessageListResponse</code>
- <code title="delete /api/{account}/chats/{chat_id}/messages/{message_id}">client.chats.messages.<a href="./src/resources/chats/messages.ts">delete</a>(messageID, { ...params }) -> MessageDeleteResponse</code>
- <code title="post /api/{account}/chats/{chat_id}/messages">client.chats.messages.<a href="./src/resources/chats/messages.ts">send</a>(chatID, { ...params }) -> MessageSendResponse</code>

# ClientSessions

Types:

- <code><a href="./src/resources/client-sessions.ts">ClientSessionCreateResponse</a></code>

Methods:

- <code title="post /api/client-sessions">client.clientSessions.<a href="./src/resources/client-sessions.ts">create</a>({ ...params }) -> ClientSessionCreateResponse</code>

# UserLists

Types:

- <code><a href="./src/resources/user-lists/user-lists.ts">UserListCreateResponse</a></code>
- <code><a href="./src/resources/user-lists/user-lists.ts">UserListUpdateResponse</a></code>
- <code><a href="./src/resources/user-lists/user-lists.ts">UserListListResponse</a></code>
- <code><a href="./src/resources/user-lists/user-lists.ts">UserListDeleteResponse</a></code>

Methods:

- <code title="post /api/{account}/user-lists">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">create</a>(account, { ...params }) -> UserListCreateResponse</code>
- <code title="put /api/{account}/user-lists/{userListId}">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">update</a>(userListID, { ...params }) -> UserListUpdateResponse</code>
- <code title="get /api/{account}/user-lists">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">list</a>(account, { ...params }) -> UserListListResponse</code>
- <code title="delete /api/{account}/user-lists/{userListId}">client.userLists.<a href="./src/resources/user-lists/user-lists.ts">delete</a>(userListID, { ...params }) -> UserListDeleteResponse</code>

## Users

Types:

- <code><a href="./src/resources/user-lists/users.ts">UserAddResponse</a></code>
- <code><a href="./src/resources/user-lists/users.ts">UserRemoveResponse</a></code>

Methods:

- <code title="post /api/{account}/user-lists/{userListId}/users">client.userLists.users.<a href="./src/resources/user-lists/users.ts">add</a>(userListID, { ...params }) -> UserAddResponse</code>
- <code title="delete /api/{account}/user-lists/{userListId}/users/{userId}">client.userLists.users.<a href="./src/resources/user-lists/users.ts">remove</a>(userID, { ...params }) -> UserRemoveResponse</code>

# Authenticate

Types:

- <code><a href="./src/resources/authenticate.ts">AuthenticatePollStatusResponse</a></code>
- <code><a href="./src/resources/authenticate.ts">AuthenticateReauthenticateResponse</a></code>
- <code><a href="./src/resources/authenticate.ts">AuthenticateStartResponse</a></code>
- <code><a href="./src/resources/authenticate.ts">AuthenticateSubmit2faResponse</a></code>

Methods:

- <code title="get /api/authenticate/{attempt_id}">client.authenticate.<a href="./src/resources/authenticate.ts">pollStatus</a>(attemptID) -> AuthenticatePollStatusResponse</code>
- <code title="post /api/authenticate/{account_id}/reauthenticate">client.authenticate.<a href="./src/resources/authenticate.ts">reauthenticate</a>(accountID) -> AuthenticateReauthenticateResponse</code>
- <code title="post /api/authenticate">client.authenticate.<a href="./src/resources/authenticate.ts">start</a>({ ...params }) -> AuthenticateStartResponse</code>
- <code title="put /api/authenticate/{attempt_id}">client.authenticate.<a href="./src/resources/authenticate.ts">submit2fa</a>(attemptID, { ...params }) -> AuthenticateSubmit2faResponse</code>

# Workflows

## AccountPerformance

# Fans

Types:

- <code><a href="./src/resources/fans.ts">FanListActiveResponse</a></code>
- <code><a href="./src/resources/fans.ts">FanListAllResponse</a></code>
- <code><a href="./src/resources/fans.ts">FanListExpiredResponse</a></code>
- <code><a href="./src/resources/fans.ts">FanListLatestResponse</a></code>

Methods:

- <code title="get /api/{account}/fans/active">client.fans.<a href="./src/resources/fans.ts">listActive</a>(account, { ...params }) -> FanListActiveResponse</code>
- <code title="get /api/{account}/fans/all">client.fans.<a href="./src/resources/fans.ts">listAll</a>(account, { ...params }) -> FanListAllResponse</code>
- <code title="get /api/{account}/fans/expired">client.fans.<a href="./src/resources/fans.ts">listExpired</a>(account, { ...params }) -> FanListExpiredResponse</code>
- <code title="get /api/{account}/fans/latest">client.fans.<a href="./src/resources/fans.ts">listLatest</a>(account, { ...params }) -> FanListLatestResponse</code>

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

- <code><a href="./src/resources/trial-links.ts">TrialLinkCreateResponse</a></code>
- <code><a href="./src/resources/trial-links.ts">TrialLinkListResponse</a></code>
- <code><a href="./src/resources/trial-links.ts">TrialLinkDeleteResponse</a></code>
- <code><a href="./src/resources/trial-links.ts">TrialLinkListSpendersResponse</a></code>
- <code><a href="./src/resources/trial-links.ts">TrialLinkListSubscribersResponse</a></code>

Methods:

- <code title="post /api/{account}/trial-links">client.trialLinks.<a href="./src/resources/trial-links.ts">create</a>(account, { ...params }) -> TrialLinkCreateResponse</code>
- <code title="get /api/{account}/trial-links">client.trialLinks.<a href="./src/resources/trial-links.ts">list</a>(account, { ...params }) -> TrialLinkListResponse</code>
- <code title="delete /api/{account}/trial-links/{trial_link_id}">client.trialLinks.<a href="./src/resources/trial-links.ts">delete</a>(trialLinkID, { ...params }) -> TrialLinkDeleteResponse</code>
- <code title="get /api/{account}/trial-links/{trial_link_id}/spenders">client.trialLinks.<a href="./src/resources/trial-links.ts">listSpenders</a>(trialLinkID, { ...params }) -> TrialLinkListSpendersResponse</code>
- <code title="get /api/{account}/trial-links/{trial_link_id}/subscribers">client.trialLinks.<a href="./src/resources/trial-links.ts">listSubscribers</a>(trialLinkID, { ...params }) -> TrialLinkListSubscribersResponse</code>

# MassMessaging

Types:

- <code><a href="./src/resources/mass-messaging.ts">MassMessagingRetrieveResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingUpdateResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingDeleteResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingListQueueResponse</a></code>
- <code><a href="./src/resources/mass-messaging.ts">MassMessagingSendResponse</a></code>

Methods:

- <code title="get /api/{account}/mass-messaging/{id}">client.massMessaging.<a href="./src/resources/mass-messaging.ts">retrieve</a>(id, { ...params }) -> MassMessagingRetrieveResponse</code>
- <code title="put /api/{account}/mass-messaging/{id}">client.massMessaging.<a href="./src/resources/mass-messaging.ts">update</a>(id, { ...params }) -> MassMessagingUpdateResponse</code>
- <code title="delete /api/{account}/mass-messaging/{id}">client.massMessaging.<a href="./src/resources/mass-messaging.ts">delete</a>(id, { ...params }) -> MassMessagingDeleteResponse</code>
- <code title="get /api/{account}/mass-messaging">client.massMessaging.<a href="./src/resources/mass-messaging.ts">listQueue</a>(account) -> MassMessagingListQueueResponse</code>
- <code title="post /api/{account}/mass-messaging">client.massMessaging.<a href="./src/resources/mass-messaging.ts">send</a>(account, { ...params }) -> MassMessagingSendResponse</code>

# Media

Types:

- <code><a href="./src/resources/media/media.ts">MediaScrapeResponse</a></code>
- <code><a href="./src/resources/media/media.ts">MediaUploadResponse</a></code>

Methods:

- <code title="post /api/{account}/media/scrape">client.media.<a href="./src/resources/media/media.ts">scrape</a>(account, { ...params }) -> MediaScrapeResponse</code>
- <code title="post /api/{account}/media/upload">client.media.<a href="./src/resources/media/media.ts">upload</a>(account, { ...params }) -> MediaUploadResponse</code>

## Vault

Types:

- <code><a href="./src/resources/media/vault/vault.ts">VaultListResponse</a></code>
- <code><a href="./src/resources/media/vault/vault.ts">VaultDeleteResponse</a></code>

Methods:

- <code title="get /api/{account}/media/vault">client.media.vault.<a href="./src/resources/media/vault/vault.ts">list</a>(account, { ...params }) -> VaultListResponse</code>
- <code title="delete /api/{account}/media/vault/delete-media">client.media.vault.<a href="./src/resources/media/vault/vault.ts">delete</a>(account, { ...params }) -> VaultDeleteResponse</code>

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

- <code><a href="./src/resources/payouts.ts">PayoutListPayoutRequestsResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRequestManualWithdrawalResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveBalancesResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveEarningStatisticsResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveEligibilityResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutUpdatePayoutFrequencyResponse</a></code>

Methods:

- <code title="get /api/{account}/payouts/payout-requests">client.payouts.<a href="./src/resources/payouts.ts">listPayoutRequests</a>(account, { ...params }) -> PayoutListPayoutRequestsResponse</code>
- <code title="post /api/{account}/payouts/request-manual-withdrawal">client.payouts.<a href="./src/resources/payouts.ts">requestManualWithdrawal</a>(account, { ...params }) -> PayoutRequestManualWithdrawalResponse</code>
- <code title="get /api/{account}/payouts/balances">client.payouts.<a href="./src/resources/payouts.ts">retrieveBalances</a>(account) -> PayoutRetrieveBalancesResponse</code>
- <code title="get /api/{account}/payouts/earning-statistics">client.payouts.<a href="./src/resources/payouts.ts">retrieveEarningStatistics</a>(account, { ...params }) -> PayoutRetrieveEarningStatisticsResponse</code>
- <code title="get /api/{account}/payouts/eligibility">client.payouts.<a href="./src/resources/payouts.ts">retrieveEligibility</a>(account) -> PayoutRetrieveEligibilityResponse</code>
- <code title="patch /api/{account}/payouts/payout-frequency">client.payouts.<a href="./src/resources/payouts.ts">updatePayoutFrequency</a>(account, { ...params }) -> PayoutUpdatePayoutFrequencyResponse</code>

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
- <code><a href="./src/resources/posts/comments.ts">CommentLikeCommentResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentPinCommentResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentUnlikeCommentResponse</a></code>
- <code><a href="./src/resources/posts/comments.ts">CommentUnpinCommentResponse</a></code>

Methods:

- <code title="post /api/{account}/posts/{post_id}/comments">client.posts.comments.<a href="./src/resources/posts/comments.ts">create</a>(postID, { ...params }) -> CommentCreateResponse</code>
- <code title="get /api/{account}/posts/{post_id}/comments">client.posts.comments.<a href="./src/resources/posts/comments.ts">list</a>(postID, { ...params }) -> CommentListResponse</code>
- <code title="delete /api/{account}/posts/{post_id}/comments/{comment_id}">client.posts.comments.<a href="./src/resources/posts/comments.ts">delete</a>(commentID, { ...params }) -> CommentDeleteResponse</code>
- <code title="post /api/{account}/posts/{post_id}/comments/{comment_id}/like">client.posts.comments.<a href="./src/resources/posts/comments.ts">likeComment</a>(commentID, { ...params }) -> CommentLikeCommentResponse</code>
- <code title="post /api/{account}/posts/{post_id}/comments/{comment_id}/pin">client.posts.comments.<a href="./src/resources/posts/comments.ts">pinComment</a>(commentID, { ...params }) -> CommentPinCommentResponse</code>
- <code title="delete /api/{account}/posts/{post_id}/comments/{comment_id}/like">client.posts.comments.<a href="./src/resources/posts/comments.ts">unlikeComment</a>(commentID, { ...params }) -> CommentUnlikeCommentResponse</code>
- <code title="delete /api/{account}/posts/{post_id}/comments/{comment_id}/pin">client.posts.comments.<a href="./src/resources/posts/comments.ts">unpinComment</a>(commentID, { ...params }) -> CommentUnpinCommentResponse</code>

## Labels

Types:

- <code><a href="./src/resources/posts/labels.ts">LabelCreateResponse</a></code>
- <code><a href="./src/resources/posts/labels.ts">LabelListResponse</a></code>

Methods:

- <code title="post /api/{account}/posts/labels">client.posts.labels.<a href="./src/resources/posts/labels.ts">create</a>(account, { ...params }) -> LabelCreateResponse</code>
- <code title="get /api/{account}/posts/labels">client.posts.labels.<a href="./src/resources/posts/labels.ts">list</a>(account, { ...params }) -> LabelListResponse</code>

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

- <code><a href="./src/resources/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/settings.ts">SettingCheckUsernameExistsResponse</a></code>
- <code><a href="./src/resources/settings.ts">SettingUpdateProfileResponse</a></code>

Methods:

- <code title="get /api/{account}/settings">client.settings.<a href="./src/resources/settings.ts">retrieve</a>(account) -> SettingRetrieveResponse</code>
- <code title="post /api/{account}/settings/username-exists">client.settings.<a href="./src/resources/settings.ts">checkUsernameExists</a>(account, { ...params }) -> SettingCheckUsernameExistsResponse</code>
- <code title="post /api/{account}/settings/profile">client.settings.<a href="./src/resources/settings.ts">updateProfile</a>(account, { ...params }) -> SettingUpdateProfileResponse</code>

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

# TrackingLinks

Types:

- <code><a href="./src/resources/tracking-links.ts">TrackingLinkCreateResponse</a></code>
- <code><a href="./src/resources/tracking-links.ts">TrackingLinkListResponse</a></code>
- <code><a href="./src/resources/tracking-links.ts">TrackingLinkDeleteResponse</a></code>
- <code><a href="./src/resources/tracking-links.ts">TrackingLinkListSpendersResponse</a></code>
- <code><a href="./src/resources/tracking-links.ts">TrackingLinkListSubscribersResponse</a></code>

Methods:

- <code title="post /api/{account}/tracking-links">client.trackingLinks.<a href="./src/resources/tracking-links.ts">create</a>(account, { ...params }) -> TrackingLinkCreateResponse</code>
- <code title="get /api/{account}/tracking-links">client.trackingLinks.<a href="./src/resources/tracking-links.ts">list</a>(account, { ...params }) -> TrackingLinkListResponse</code>
- <code title="delete /api/{account}/tracking-links/{tracking_link_id}">client.trackingLinks.<a href="./src/resources/tracking-links.ts">delete</a>(trackingLinkID, { ...params }) -> TrackingLinkDeleteResponse</code>
- <code title="get /api/{account}/tracking-links/{tracking_link_id}/spenders">client.trackingLinks.<a href="./src/resources/tracking-links.ts">listSpenders</a>(trackingLinkID, { ...params }) -> TrackingLinkListSpendersResponse</code>
- <code title="get /api/{account}/tracking-links/{tracking_link_id}/subscribers">client.trackingLinks.<a href="./src/resources/tracking-links.ts">listSubscribers</a>(trackingLinkID, { ...params }) -> TrackingLinkListSubscribersResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /api/{account}/transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>(account, { ...params }) -> TransactionListResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="get /api/{account}/users/{username}">client.users.<a href="./src/resources/users.ts">retrieve</a>(username, { ...params }) -> UserRetrieveResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookDeleteResponse</a></code>

Methods:

- <code title="post /api/webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="delete /api/webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(webhookID) -> unknown</code>
