// novels.js
document.addEventListener('DOMContentLoaded', function() {
    // 篩選功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const novelItems = document.querySelectorAll('.novel-item');
    const sortSelect = document.querySelector('.sort-select');
    
    // 類型/狀態篩選
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除同組按鈕的active類
            const buttonGroup = this.parentElement;
            buttonGroup.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 為當前按鈕添加active類
            this.classList.add('active');
            
            // 執行篩選
            filterNovels();
        });
    });
    
    // 標籤篩選
    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            filterNovels();
        });
    });
    
    // 排序功能
    sortSelect.addEventListener('change', function() {
        sortNovels(this.value);
    });
    
    // 篩選小說函數
    function filterNovels() {
        const selectedCategory = document.querySelector('.filter-options .filter-btn[data-category].active').dataset.category;
        const selectedStatus = document.querySelector('.filter-options .filter-btn[data-status].active').dataset.status;
        const selectedTags = Array.from(document.querySelectorAll('.tag-options .tag-btn.active')).map(btn => btn.dataset.tag);
        
        novelItems.forEach(item => {
            const itemCategory = item.dataset.category;
            const itemStatus = item.dataset.status;
            const itemTags = item.dataset.tags.split(',');
            
            // 檢查類型和狀態
            const categoryMatch = selectedCategory === 'all' || itemCategory === selectedCategory;
            const statusMatch = selectedStatus === 'all' || itemStatus === selectedStatus;
            
            // 檢查標籤
            let tagMatch = selectedTags.length === 0;
            if (selectedTags.length > 0) {
                tagMatch = selectedTags.some(tag => itemTags.includes(tag));
            }
            
            // 顯示或隱藏項目
            if (categoryMatch && statusMatch && tagMatch) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // 排序小說函數
    function sortNovels(criteria) {
        const container = document.querySelector('.novel-list');
        const items = Array.from(document.querySelectorAll('.novel-item'));
        
        items.sort((a, b) => {
            // 實際項目中應該從數據屬性獲取排序值
            // 這裡只是演示
            if (criteria === 'popular') {
                return Math.random() - 0.5; // 模擬排序
            } else if (criteria === 'update') {
                return Math.random() - 0.5;
            } else if (criteria === 'rating') {
                return Math.random() - 0.5;
            } else if (criteria === 'words') {
                return Math.random() - 0.5;
            } else {
                return Math.random() - 0.5;
            }
        });
        
        // 重新插入排序後的項目
        items.forEach(item => container.appendChild(item));
    }
});

// comics.js 內容與 novels.js 類似，只是選擇器改為漫畫相關的