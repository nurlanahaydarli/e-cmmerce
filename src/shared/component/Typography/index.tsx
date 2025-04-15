import React, { PropsWithChildren } from "react";

import { FontAlign, FontColor, FontVariant, FontWeight } from "./type";
import style from "./Typography.module.css";
import {clsnm} from "../../utils/clsnm";

// import { clsnm } from "@/utils/clsnm";

type Props<T extends React.ElementType> = {
    variant?: FontVariant;
    weight?: FontWeight;
    color?: FontColor;
    as?: T;
    align?: FontAlign;
    title?: string;
    className?: string;
    custom_color?: string;
};

export function Typography<T extends React.ElementType = "p">({
                                                                  variant = "text_medium",
                                                                  color = "primary-200",
                                                                  weight = "regular",
                                                                  as,
                                                                  align = "left",
                                                                  custom_color,
                                                                  children,
                                                                  className,
                                                                  title,
                                                                  ...props
                                                              }: PropsWithChildren<Props<T>> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
    const Component = as || "p";
    return (
        <Component
            title={title}
            className={clsnm(
                custom_color ? `color: ${custom_color}` : "",
                style[variant],
                style[weight],
                style[color],
                style[align],
                className || "",
            )}
            {...props}
            style={custom_color ? { color: custom_color } : undefined}
        >
            {title || children}
        </Component>
    );
}
