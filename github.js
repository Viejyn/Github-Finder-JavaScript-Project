export class Github {
    // istek atmak için gerekli olan bilgiler
    constructor () {
        this.client_id = 'e49fef78d819b970b13d';
        this.client_secret = 'c8d1a5a3748a330f1c22174e47ae62dfe0b9e7c6';
        this.per_page = 10;
        this.sort = "asc";
    }

    // api'den kullanıcı bilgilerini alma
    async fetchUserData(username) {
        // parametre olarak gelen kullanıcı ismine göre istek attık
        const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
 
        // kullanıcının projelerini alma
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=${this.sort}&per_page=${this.per_page}`);

        // gelen cevabı json verisine çevirme
        const data = await profileRes.json();
        const repos = await repoRes.json();

        // fonksiyonun çağırıldığı yere bilgileri gönderme
        return { data, repos };
    }
}