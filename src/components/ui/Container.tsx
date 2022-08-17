import React from "react"
import clsx from "clsx"

interface Props<T extends React.ElementType> {
  as?: T
  children: React.ReactNode
}

const Container = <T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...props
}: Props<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || "div"

  return (
    <Component
      className={clsx(
        "mx-auto max-w-3xl px-4 pt-12 lg:max-w-5xl xl:max-w-6xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Container
