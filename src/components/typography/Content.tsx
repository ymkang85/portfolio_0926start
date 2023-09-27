import React from 'react'
import Heading from './Heading'
import HeadingInterface, {HeadingColor} from '../../modules/HeadingInterface'

export type ContentInterface = {
    heading: string;
    headingColor: HeadingColor;
    className? : string;
} & HeadingInterface;

const Content = ({
    heading,
    variant, 
    headingColor,
    className
}: ContentInterface) => {
  return (
    <Heading variant={variant} color={headingColor}>
        {heading}
    </Heading>
  )
}

export default Content