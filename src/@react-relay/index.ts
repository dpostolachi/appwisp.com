import * as _Relay from 'react-relay'
import * as _RelayRuntime from 'relay-runtime'
import * as _RelayServerSSR from 'react-relay-network-modern-ssr/lib/server'
import * as _RelayClientSSR from 'react-relay-network-modern-ssr/lib/client'
export type {
	PreloadedQuery,
	VariablesOf,
} from 'react-relay'
export type {
	GraphQLResponse,
	FetchFunction,
} from 'relay-runtime'
// Network,
// RecordSource,
// Store,
// GraphQLResponse,
const Relay = ( _Relay as unknown as { default: typeof _Relay } ).default || _Relay
const RelayRuntime = ( _RelayRuntime as unknown as { default: typeof _RelayRuntime } ).default || _RelayRuntime
export const RelayServerSSR = ( _RelayServerSSR as unknown as { default: typeof _RelayServerSSR } ).default.default || _RelayServerSSR.default
export const RelayClientSSR = ( _RelayClientSSR as unknown as { default: typeof _RelayClientSSR } ).default.default || _RelayClientSSR.default

export const graphql = Relay.graphql
export const fetchQuery = Relay.fetchQuery
export const useLazyLoadQuery = Relay.useLazyLoadQuery
export const usePreloadedQuery = Relay.usePreloadedQuery
export const useFragment = Relay.useFragment
export const usePaginationFragment = Relay.usePaginationFragment
export const useQueryLoader = Relay.useQueryLoader
export const useRelayEnvironment = Relay.useRelayEnvironment
export const RelayEnvironmentProvider = Relay.RelayEnvironmentProvider
export const commitLocalUpdate = Relay.commitLocalUpdate
export const commitMutation = Relay.commitMutation
export const useMutation = Relay.useMutation
export const useRefetchableFragment = Relay.useRefetchableFragment
export const Environment = RelayRuntime.Environment
export const Network = RelayRuntime.Network
export const Store = RelayRuntime.Store
export const RecordSource = RelayRuntime.RecordSource

