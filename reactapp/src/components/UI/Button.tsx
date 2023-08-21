import React, {ReactNode} from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

const Button = ({children, ...props}: Props) => {

    const classForBtn = "min-w-[100px] my-1 p-4 bg-[#5795FD] text-white border-[1px] " +
        "rounded-[7px] duration-500 hover:text-[#999] hover:bg-[#FBFBFB]"

    return (
        <button
            {...props}
            className={classForBtn}
        >
            {children}
        </button>
    );
};

export default Button;
