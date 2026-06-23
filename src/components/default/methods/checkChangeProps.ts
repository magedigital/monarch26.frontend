import I from '../types.ts';

const checkChangeProps: I['checkChangeProps'] = async function (this: I) {
    if (!this.isAuthCheck && this.props.isAuthCheck === true && this.checkAuthCb) {
        this.isAuthCheck = true;

        if (this.props.authUser) {
            await this.asyncSetState({ authUser: this.props.authUser });

            if (this.init) {
                await this.init();
            }
        }

        await this.checkAuthCb();
    }

    if (!this.changingProps) {
        return;
    }

    this.changingProps.forEach((prop) => {
        if (this.changedProps[prop] !== this.props[prop] && this.changePropsCb) {
            this.changePropsCb(prop);

            this.changedProps[prop] = this.props[prop];
        }
    });
};

export default checkChangeProps;
