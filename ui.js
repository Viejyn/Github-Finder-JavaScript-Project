export class UI{
    // içerisine html göndereceğimiz elemanları çağırma
    constructor() {   
        this.profile = document.querySelector('#profile');
        this.repoArea = document.querySelector('#repos');
        this.alertArea = document.querySelector('#alert-area');
    }

    // profil yüzünü ekrana basar
    renderProfile(data) {
        console.log(data);
        this.profile.innerHTML = `
        <div class="row border p-4 my-4">
            <div class="col-md-3">
                <img class="img-fluid rounded shadow" src="${data.avatar_url}" />
                <a target="_blank"  class="btn btn-primary my-4 w-100" href="${data.html_url}">Profili Göster</a>
            </div>
            <div class="col-md-9">                
                <span class="badge bg-primary mt-1 fs-6">Açık Repolar: ${data.public_repos}</span>
                <span class="badge bg-secondary mt-1 fs-6">Açık Gistler: ${data.public_gists}</span>
                <span class="badge bg-success mt-1 fs-6">Takipçiler: ${data.followers}</span>
                <span class="badge bg-info mt-1 fs-6">Takip Edilenler: ${data.following}</span>

                <ul class="list-group mt-5">
                    <li class="list-group-item">Hakkında: ${data.bio}</li>
                    <li class="list-group-item">Şirket: ${data.company}</li>
                    <li class="list-group-item">Website: ${data.blog}</li>
                    <li class="list-group-item">Konum: ${data.location}</li>
                    <li class="list-group-item">Hesap Oluşturma: ${data.created_at}</li>
                </ul>
            </div>
        </div>
        `;
    }

    //! projeleri ekrana bas
    //* projeler dizisindeki her bir eleman 
    //* için kart oluştur ve ilgili html elementine gönder
    renderProjects(data) {
        // repo alanını temizle
        this.repoArea.innerHTML = '';

        // kartları oluştur ve gönder
        data.forEach((repo) => {
            console.log(repo);
            this.repoArea.innerHTML += `
            <div class="border row p-3 mb-4 align-items-center">
               <div class="col-6">
                  <a target="_blank" href="${repo.html_url}">${repo.name}</a>
               </div>
               <div class="col-6">
                  <span class="badge bg-primary">Yıldız: ${repo.stargazers_count}</span>
                  <span class="badge bg-secondary">İzleyenler: ${repo.watchers_count}</span>
                  <span class="badge bg-success">Fork: ${repo.forks_count}</span>
                </div>
            </div>           
            `;
        });
    }

    // bildirim kutucuğunu ekrana bas
    showAlert(message,classname){
        // uyarı divi oluşturma
        const div = document.createElement('div');

        // uyarı mesajını ekleme
        div.innerText = message;

        // dive sabit classı ekleme
        div.classList.add('alert');

        // dive dinamik class ı ekleme
        div.classList.add(classname);

        // eski alert'i temizleme
        this.alertArea.innerHTML = '';

        // uyarıyı html'e gönderme
        this.alertArea.appendChild(div);

        // setTimeout: kendisine verilen fonksiyonu belirli
        // bir süre sonra çalıştırır.
        setTimeout(() => {
            div.remove();
        }, 3000);
    }   
}
