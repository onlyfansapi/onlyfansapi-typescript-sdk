// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages/messages';
import { MessageListParams, MessageListResponse, Messages } from './messages/messages';
import * as PostsAPI from './posts/posts';
import { PostListParams, PostListResponse, Posts } from './posts/posts';

export class SavedForLater extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
}

SavedForLater.Messages = Messages;
SavedForLater.Posts = Posts;

export declare namespace SavedForLater {
  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageListParams as MessageListParams,
  };

  export { Posts as Posts, type PostListResponse as PostListResponse, type PostListParams as PostListParams };
}
