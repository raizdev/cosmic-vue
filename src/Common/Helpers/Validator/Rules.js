import { defineRule  } from "vee-validate";
import store from "../../../Store"


export const usernameTaken = () => {
    defineRule('usernameTaken', value => {
        return store.dispatch('auth/userAvailability', {username: value }).then((res) => {
            return res.availability === 0
        })
    });
}

export { usernameTaken as username_taken };
