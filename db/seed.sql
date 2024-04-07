
-- Insert data into 'raffles' table with unique secret_token values
INSERT INTO raffles (name, secret_token)
VALUES
    ('Help the aged', 'H63T2Yb4pL'),
    ('Buy me a new car', 'gR6dF7sP9W'),
    ('Buy a wheelchair for Alice', 'e8jWq2vKuX');

-- Insert data into 'participants' table
INSERT INTO participants (first_name, last_name, email, phone, raffle_id)
VALUES
    ('Alice', 'Johnson', 'alice@example.com', '123-456-7890', 3),
    ('Bob', 'Smith', 'bob@example.com', '234-567-8901', 1),
    ('Eve', 'Doe', 'eve@example.com', '345-678-9012', 2),
    ('John', 'Doe', 'john@example.com', '456-789-0123', 3),
    ('Jane', 'Smith', 'jane@example.com', '567-890-1234', 1),
    ('Mike', 'Johnson', 'mike@example.com', '678-901-2345', 2),
    ('Sarah', 'Brown', 'sarah@example.com', '789-012-3456', 3),
    ('David', 'White', 'david@example.com', '890-123-4567', 1),
    ('Emily', 'Davis', 'emily@example.com', '901-234-5678', 2),
    ('Chris', 'Taylor', 'chris@example.com', '012-345-6789', 1);



