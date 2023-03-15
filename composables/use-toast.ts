import Toast from "~/components/Toast/Toast.vue";
import {CSSTransitionProps} from "vue3-toastify";

export function useToast() {

    const customAnimation = {
        enter: "toast-notification-enter-active",
        exit: "toast-notification-leave-active",
    } as CSSTransitionProps;
    const toast = (content: string, time = 2000) => {
        return useNuxtApp().$toast(Toast, {
            data: {
                content: content
            },
            autoClose: time,
            closeButton: false,
            hideProgressBar: true,
            position: useNuxtApp().$toast.POSITION.BOTTOM_CENTER,
            transition: customAnimation,
        })
    }

    return {
        toast,
    };
}