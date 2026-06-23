import { API } from '@/src/api/api';
import request from '@/src/utils/request';

type AnketDataT = {
    referral?: string;
    firstName: string;
    lastName: string;
    thirdName: string;
    phone: string;
    agreement: boolean;
    mailing: string;
    password1: string;
    password2: string;
    welcomeGameId: string;
};

async function send({ data }: { data: Partial<AnketDataT> }): Promise<void> {
    await request({
        method: 'POST',
        url: API.ANKET.SEND,
        data,
    });
}

async function upload({ file, name }: { file: File; name: string }): Promise<void> {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('fileName', name);

    await request({
        method: 'POST',
        url: API.ANKET.UPLOAD,
        data: formData,
    });
}

export const anketRequests = {
    send,
    upload,
};
export type { AnketDataT };
