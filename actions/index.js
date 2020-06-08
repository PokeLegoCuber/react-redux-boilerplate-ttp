// actions/index.js
// Namespace actions
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const CLEAR = 'counter/CLEAR';
export const CUSTOM_INCREMENT = 'counter/CUSTOM_INCREMENT';

export function increment_custom (value)
{
    return
    {
        type: CUSTOM_INCREMENT,
        value
    }
}
