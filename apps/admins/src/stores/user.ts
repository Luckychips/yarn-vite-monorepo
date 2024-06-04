import { reactive } from 'vue'

export const store: any = reactive({
    user: null,
    setUser(user: any) {
        this.user = user
    }
})
