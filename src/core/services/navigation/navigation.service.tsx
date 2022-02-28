import * as React from 'react';

export const isReadyRef = React.createRef<any>();

export const navigationRef = React.createRef<any>();

export function navigate(name, params?) {
    navigationRef.current?.navigate(name, params);
}

export function goBack() {
    navigationRef.current?.goBack();
}