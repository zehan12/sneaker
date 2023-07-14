import { FC, Fragment, ReactNode } from "react";
import PropTypes, { InferProps } from 'prop-types';

interface WrapperProps {
    children: ReactNode;
    className?: string;
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
    return (
        <Fragment>
            <div
                className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className || ""}`}
            >
                {children}
            </div>
        </Fragment>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
