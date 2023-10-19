import React from 'react'
import { Icon } from '@iconify/react'

export default function ICON(): JSX.Element {
    return (
        <div>
            Hello <Icon width={18} icon="fa6-regular:user" />
            Hello <Icon width={18} icon="fa6-regular:address-book" />
        </div>
    );
}
