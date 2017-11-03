//
// Author: leafsoar
// Date: 2017-07-25 18:39:56
// 
import * as types from '../actions/actionTypes';

const initialState = {
	game:null,
	statics: null,
	staticFile:null,
};

export default function Sataic(state = initialState, action = {}) {
	switch(action.type) {
	case types.SET_STATIC_FILE:
		return Object.assign(
			{},state,
			{staticFile: action.data}
		);
	case types.SET_STATIC:
		return Object.assign(
			{},state,
			{statics: action.data}
		);
	case types.SET_GAME:
		return Object.assign(
			{},state,
			{game: action.data}
		);
	default:
		return state;
	}
}