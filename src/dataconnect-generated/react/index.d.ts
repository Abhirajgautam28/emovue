import { CreateUserData, CreateUserVariables, GetUserData, GetUserVariables, CreateMessageData, CreateMessageVariables, ListMessagesByConversationData, ListMessagesByConversationVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useGetUser(vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;
export function useGetUser(dc: DataConnect, vars: GetUserVariables, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, GetUserVariables>;

export function useCreateMessage(options?: useDataConnectMutationOptions<CreateMessageData, FirebaseError, CreateMessageVariables>): UseDataConnectMutationResult<CreateMessageData, CreateMessageVariables>;
export function useCreateMessage(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMessageData, FirebaseError, CreateMessageVariables>): UseDataConnectMutationResult<CreateMessageData, CreateMessageVariables>;

export function useListMessagesByConversation(vars: ListMessagesByConversationVariables, options?: useDataConnectQueryOptions<ListMessagesByConversationData>): UseDataConnectQueryResult<ListMessagesByConversationData, ListMessagesByConversationVariables>;
export function useListMessagesByConversation(dc: DataConnect, vars: ListMessagesByConversationVariables, options?: useDataConnectQueryOptions<ListMessagesByConversationData>): UseDataConnectQueryResult<ListMessagesByConversationData, ListMessagesByConversationVariables>;
