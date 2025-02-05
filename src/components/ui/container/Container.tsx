import { ReactNode } from 'react';
import cl from './container.module.scss';

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return <div className={`${cl.container} ${className}`}>{children}</div>;
};

export default Container;
