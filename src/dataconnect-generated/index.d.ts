import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Conversation_Key {
  id: UUIDString;
  __typename?: 'Conversation_Key';
}

export interface CreateMessageData {
  message_insert: Message_Key;
}

export interface CreateMessageVariables {
  conversationId: UUIDString;
  content: string;
  senderType: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  email: string;
  username: string;
}

export interface EmotionLog_Key {
  id: UUIDString;
  __typename?: 'EmotionLog_Key';
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    email: string;
    username: string;
    createdAt: TimestampString;
  } & User_Key;
}

export interface GetUserVariables {
  id: UUIDString;
}

export interface ListMessagesByConversationData {
  messages: ({
    id: UUIDString;
    content: string;
    sentAt: TimestampString;
    senderType: string;
  } & Message_Key)[];
}

export interface ListMessagesByConversationVariables {
  conversationId: UUIDString;
}

export interface Message_Key {
  id: UUIDString;
  __typename?: 'Message_Key';
}

export interface Preference_Key {
  id: UUIDString;
  __typename?: 'Preference_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserVariables): QueryRef<GetUserData, GetUserVariables>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;
export function getUser(dc: DataConnect, vars: GetUserVariables): QueryPromise<GetUserData, GetUserVariables>;

interface CreateMessageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMessageVariables): MutationRef<CreateMessageData, CreateMessageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMessageVariables): MutationRef<CreateMessageData, CreateMessageVariables>;
  operationName: string;
}
export const createMessageRef: CreateMessageRef;

export function createMessage(vars: CreateMessageVariables): MutationPromise<CreateMessageData, CreateMessageVariables>;
export function createMessage(dc: DataConnect, vars: CreateMessageVariables): MutationPromise<CreateMessageData, CreateMessageVariables>;

interface ListMessagesByConversationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListMessagesByConversationVariables): QueryRef<ListMessagesByConversationData, ListMessagesByConversationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListMessagesByConversationVariables): QueryRef<ListMessagesByConversationData, ListMessagesByConversationVariables>;
  operationName: string;
}
export const listMessagesByConversationRef: ListMessagesByConversationRef;

export function listMessagesByConversation(vars: ListMessagesByConversationVariables): QueryPromise<ListMessagesByConversationData, ListMessagesByConversationVariables>;
export function listMessagesByConversation(dc: DataConnect, vars: ListMessagesByConversationVariables): QueryPromise<ListMessagesByConversationData, ListMessagesByConversationVariables>;

