
document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');

    const sampleVideos = [
        { id: 1, title: 'Building a Web App with Next.js', channel: 'Dev Explained', thumb: 'https://picsum.photos/seed/v1/400/225' },
        { id: 2, title: 'The Future of AI', channel: 'TechForward', thumb: 'https://picsum.photos/seed/v2/400/225' },
        { id: 3, title: 'Exploring the Deep Sea', channel: 'Nature Docs', thumb: 'https://picsum.photos/seed/v3/400/225' },
        { id: 4, title: 'Ultimate Guide to Cooking Pasta', channel: 'ChefMaster', thumb: 'https://picsum.photos/seed/v4/400/225' },
        { id: 5, title: 'How Rockets Work', channel: 'SpaceTech', thumb: 'https://picsum.photos/seed/v5/400/225' },
        { id: 6, title: 'A Tour of Ancient Rome', channel: 'History Buffs', thumb: 'https://picsum.photos/seed/v6/400/225' },
    ];

    sampleVideos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <img src="${video.thumb}" alt="${video.title}">
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="channel-info">${video.channel}</p>
            </div>
        `;
        videoGrid.appendChild(card);
    });
});
