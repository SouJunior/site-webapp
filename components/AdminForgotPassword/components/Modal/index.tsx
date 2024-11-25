import React from "react";
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Politicas } from "../../../Politicas";

type ModalProps =  {
    messages: string[]
    setOpen: (open) => void
}

export const Modal = ({ messages, setOpen }: ModalProps) => {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className='inset-0 fixed bg-black/60'>
                <Dialog.Content className='fixed bg-admin-login bg-cover bg-adminLogin overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[420px] md:h-[200px] w-full md:rounded-3xl flex flex-col outline-none'>
                    <Dialog.Close onClick={() => setOpen(false)} className='p-4 text-slate-400 hover:text-slate-100 absolute top-0 right-0'>
                        <X className='size-8'/>
                    </Dialog.Close>
                    <div className="h-full w-full px-8 flex justify-center items-center flex-col">
                        {
                            messages.map(message => <span className="text-primary font-medium text-2xl text-center">{message}</span>)
                        }
                    </div>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    )
}