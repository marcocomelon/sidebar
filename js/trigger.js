const toastTrigger = document.getElementById('showToastBtn');
    const toastLive = document.getElementById('liveToast');

    if (toastTrigger) {
        const toast = new bootstrap.Toast(toastLive);

        toastTrigger.addEventListener('click', () => {
            toast.show();
        });
    }