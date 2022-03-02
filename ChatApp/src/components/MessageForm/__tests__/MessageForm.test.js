import { MessageForm } from '..';
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('test MessageForm presentation', () => {
    it("MessageForm matches snaphot", () => {
        const result = render(<Provider store={store}><MessageForm addMessage={()=>{}}/></Provider>);

        expect(result).toMatchSnapshot();
    });

    it('calls addMessage when form submit', () => {
        const myHandler = jest.fn();

        render(<Provider store={store}><MessageForm addMessage={myHandler}/></Provider>);

        const submitBtn = screen.getByText('Send');

        fireEvent(
            submitBtn,
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
        );

        expect(myHandler).toHaveBeenCalledTimes(1);
    });

    it('calls addMessage whith text when form submit', async () => {
        const myHandler = jest.fn();

        render(<Provider store={store}><MessageForm addMessage={myHandler}/></Provider>);

        const submitBtn = screen.getByText('Send');
        const formInput = screen.getByTestId('messageTextField').querySelector('input');

        fireEvent.change(formInput, {target: {value: 'test message'}});
        fireEvent(
            submitBtn,
            new MouseEvent("click", {
              bubbles: true,
              cancelable: true,
            })
        );

        expect(myHandler).toHaveBeenCalledTimes(1);
        expect(myHandler).toHaveBeenCalledWith('test message', undefined);
    });
});