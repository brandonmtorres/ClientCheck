import React from 'react'

import ModalButton from './ModalButton'
import DebugButton from './DebugButton'
import RunCheck from './RunCheck'
import DownloadResults from './DownloadResults'


export default function Buttons() {

    return (
        <>
        <div className='mt-10'>
            <ModalButton name="Upload Input File" />
            <ModalButton name="Upload Client File" />
            <ModalButton name="Upload Teams File" />

                <div className='flex justify-center'>
                    <RunCheck name="Run Client Check" />
                    <DownloadResults name="Download Results"/>
                    <DebugButton name="Debug Report" />
                    
                </div>
        </div>
        </>

    )
}

