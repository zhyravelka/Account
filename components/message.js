class Message {
    render() {
        return `
            <div class="message_item ${this.status.toLowerCase()}">
                <div class="message_title_status">
                    <div class="message_status">
                        ${this.status}
                    </div>
                    <h2 class="message_title">${this.title}</h2>
                </div>
                <div class="message_content">
                    <div class="message_header">
                        <div class="message_meta">
                            <span class="author">${this.author}</span>
                            <span class="date">${this.date}</span>
                        </div>
                    </div>
                    <p class="message_text">${this.content}</p>
                    <div class="message_attachments">
                        <div class="attachments_info">
                            <span class="attachment_count">
                                <i class="fas fa-paperclip"></i>
                                ${this.attachments} attachments
                            </span>
                        </div>
                        <button class="reply_btn">Reply</button>
                    </div>
                </div>
            </div>
        `;
    }
}