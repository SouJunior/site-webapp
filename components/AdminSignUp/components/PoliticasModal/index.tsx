import React from "react";
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Politicas } from "../../../Politicas";

type PoliticasModalProps =  {
    handleScroll: (e: any) => void
    setFieldValue: (field, value) => void
    bottom: boolean
}

export const PoliticasModal = ({ handleScroll, setFieldValue, bottom }: PoliticasModalProps) => {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className='inset-0 fixed bg-black/60'>
                <Dialog.Content className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[560px] md:h-[50vh] w-full bg-white md:rounded-md flex flex-col outline-none'>
                    <div className='flex justify-center items-center relative h-24 text-xl font-semibold'>
                        <div className='h-full flex items-center px-2 border-b-2 border-primary'>
                            <h3 className='text-primary'>Termos de uso e Politica de Privacidade</h3>
                        </div>
                        <Dialog.Close className='p-4 text-slate-400 hover:text-slate-100 absolute top-0 right-0'>
                            <X className='size-8'/>
                        </Dialog.Close>
                    </div>
                    <Politicas handleScroll={handleScroll}/>
                    <Dialog.Close>
                        <button
                            className={`py-4 my-8  rounded-lg px-24 w-fit text-xl m-auto ${bottom ? 'bg-primary hover:bg-primaryHover' : 'bg-slate-500'}`}
                            onClick={() => setFieldValue("terms", true)}
                            disabled={!bottom}
                            type="submit"
                        >
                            LI E CONCORDO
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>
    )
}