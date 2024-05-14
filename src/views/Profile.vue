<template>
    <div class="profile">
        <h2>Profile</h2>
        <div class="profile-box">
            <div class="profile-info">
                <p>Name: {{ user.firstname }}</p>
                <p>Email: {{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {}
        };
    },
    mounted() {
        const id = this.$route.query.id;
        this.loadUserData(id);
    },
    methods: {
        async loadUserData(id) {
            try {
                id = parseInt(id);
                const response = await fetch("./data/user.json");
                const users = await response.json();
                this.user = users.find(u => u.id === id);
            } catch (error) {
                console.error("Error loading user data:", error);
            }
        }
    }
};
</script>