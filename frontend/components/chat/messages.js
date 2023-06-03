

const Messages = ({ obj, styles, account }) => {
    const { user, email, message, datetime } = obj
    return (
        <div className={`${styles.message_container} ${email == account.email ? styles.local_messages : ''}`}>

            <div className={styles.user_msg_container}>

                {email !== account.email ? <h3 className={styles.user_name}>{user}</h3> : ''}
                <p className={styles.user_message}>
                    {message}
                </p>

                <div className={styles.date}>
                    <span title={datetime.full_date} className={styles.message_date}>
                        {datetime.hour}
                    </span>
                </div>
            </div>

        </div>

    )
}

export default Messages