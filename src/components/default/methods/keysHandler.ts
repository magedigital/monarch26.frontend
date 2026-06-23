import I, { KeysT } from '../types.ts';

const keysHandler: I['keysHandler'] = async function (e) {
    if (!this.keysCallback) {
        return;
    }

    const code = e.code as KeysT;

    await this.keysCallback({
        e,
        name: code,
        isMeta: e.metaKey,
        isShift: e.shiftKey,
        isCtrl: e.ctrlKey,
    });
};

export default keysHandler;
