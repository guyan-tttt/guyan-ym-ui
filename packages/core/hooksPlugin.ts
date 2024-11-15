import { each, isFunction } from 'lodash-es';
import shelljs from 'shelljs';
import { build } from 'vite';

export default function hooksPlugin({
    rmFiles= [],
    beforeBuild,
    afterBuild

}:{
    rmFiles?: string[],
    beforeBuild?: Function ,
    afterBuild?: Function
})
{
    return {
        name: "hooks-plugin",
        buildStart() {
            each(rmFiles,(file) => {
                shelljs.rm("-rf",file)
            })
            isFunction(beforeBuild) && beforeBuild()

        },
        buildEnd(err?: Error) {
            !err && isFunction(afterBuild) && afterBuild()
        }
    }
}