// src/types/material-tailwind-react.d.ts
import * as React from "react";

declare module "@material-tailwind/react" {
    // --- CardProps override ---
    export interface CardProps extends React.HTMLAttributes<HTMLElement> {
        children?: React.ReactNode;
        color?: string;
        variant?: string;
        shadow?: boolean;
        className?: string;
        as?: React.ElementType;
    }
    export const Card: React.FC<CardProps>;
    export const CardBody: React.FC<React.HTMLAttributes<HTMLElement>>;

    // --- TypographyProps override ---
    export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
        children?: React.ReactNode;
        variant?: string;
        color?: string;
        className?: string;
        as?: React.ElementType;
    }
    export const Typography: React.ForwardRefExoticComponent<
        TypographyProps & React.RefAttributes<HTMLElement>
    >;

    // --- IconButtonProps override ---
    export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
        children?: React.ReactNode;
        variant?: string;
        color?: string;
        size?: string;
        ripple?: boolean;
        className?: string;
        as?: React.ElementType;
    }
    export const IconButton: React.FC<IconButtonProps>;

    // --- InputProps override ---
    export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
        label?: string;
        color?: string;
        variant?: string;
        required?: boolean;
        className?: string;
        as?: React.ElementType;
    }
    export const Input: React.FC<InputProps>;
}
