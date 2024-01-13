
APIのエンドポイントは`/api`以下になり、
例えば `getUser` というAPIの場合は、 `/api/getUser` というエンドポイントになります。

なお、HTTP メソッドは全て `POST` です。

## getUser

ユーザー情報を取得します。

### リクエスト

```json
{
    "firebaseId": "abcd1234"
}
```

### レスポンス

```json

{
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "firebaseId": "abcd1234",
    "email": "john.doe@gmail.com",
    "name": "John Doe",
    "createdAt": "2024-01-08T17:53:15.077Z",
    "updatedAt": "2024-01-08T17:53:15.077Z",
    "deletedAt": null
}
```

## createUser

ユーザー情報を作成します。

### リクエスト

```json
{
    "firebaseId": "abcd1234",
    "email": "john.doe@gmail.com",
    "name": "John Doe"
}
```

### レスポンス

```json
{
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "firebaseId": "abcd1234",
    "email": "john.doe@gmail.com",
    "name": "John Doe",
    "createdAt": "2024-01-08T17:53:15.077Z",
    "updatedAt": "2024-01-08T17:53:15.077Z",
    "deletedAt": null
}
``````

## updateUser

ユーザー情報を更新します。

### リクエスト

```json
{
    "userId": "28c1318d-d57b-4ac8-85ed-1edac61055d5",
    "email": "john.doe2@gmail.com",
    "name": "John Doe"
}
```

### レスポンス

```json
{
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "firebaseId": "abcd1234",
    "email": "john.doe2@gmail.com",
    "name": "John Doe",
    "createdAt": "2024-01-08T17:53:15.077Z",
    "updatedAt": "2024-01-08T17:53:15.077Z",
    "deletedAt": null
}
```

## getDaysOfWeekList

曜日の一覧を取得します。

### リクエスト

```json
{}
```

### レスポンス

```json
[
    {
        "dayOfWeekId": "da824886-c1cc-4486-9299-a3a361d9526d",
        "name": "Monday"
    },
    {
        "dayOfWeekId": "e75bb39a-12a2-46fa-8fec-25f99fb259fc",
        "name": "Tuesday"
    },
    {
        "dayOfWeekId": "6d075ee2-fe41-48e8-bdc1-8be5347bede4",
        "name": "Wednesday"
    },
    {
        "dayOfWeekId": "d5c99b08-cf64-4c33-b118-6c5f67b11e03",
        "name": "Thursday"
    },
    {
        "dayOfWeekId": "9e7d81a6-0d00-4dc0-bc2e-b28e4b992080",
        "name": "Friday"
    },
    {
        "dayOfWeekId": "ae8ebe23-ab7e-405e-8466-092c39de3570",
        "name": "Saturday"
    },
    {
        "dayOfWeekId": "b173c99e-70e3-463b-8e01-bae55d7e7d37",
        "name": "Sunday"
    }
]
```

## updateDayOfWeek

曜日の表記を更新します。

### リクエスト

```json
{
    "dayOfWeekId": "10f0e757-8ccc-4ed0-8a4d-265b10b512cd",
    "name": "月曜日"
}
```

### レスポンス

```json
{
    "dayOfWeekId": "10f0e757-8ccc-4ed0-8a4d-265b10b512cd",
    "name": "月曜日"
}
```

## createSchedule

学習スケジュールを登録します。

### リクエスト

```json
{
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "dayOfWeekId": "da824886-c1cc-4486-9299-a3a361d9526d",
    "duration": 3
}
```

### レスポンス

```json
{
    "scheduleId": "069eba79-2897-4c1a-ba76-191003f08747",
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "dayOfWeekId": "da824886-c1cc-4486-9299-a3a361d9526d",
    "duration": 1,
    "createdAt": "2024-01-08T17:53:59.055Z",
    "updatedAt": "2024-01-08T18:01:13.129Z",
    "deletedAt": null
}
```

## getSchedulesList

学習スケジュールの一覧を取得します。

### リクエスト

```json
{
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9"
}
```

### レスポンス

```json
[
    {
        "scheduleId": "069eba79-2897-4c1a-ba76-191003f08747",
        "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
        "dayOfWeekId": "da824886-c1cc-4486-9299-a3a361d9526d",
        "duration": 1,
        "createdAt": "2024-01-08T17:53:59.055Z",
        "updatedAt": "2024-01-08T18:01:13.129Z",
        "deletedAt": null
    }
]
```

## updateSchedule

学習スケジュールを更新します。

### リクエスト

```json
{
    "scheduleId": "069eba79-2897-4c1a-ba76-191003f08747",
    "duration": 1
}
```

### レスポンス

```json
{
    "scheduleId": "069eba79-2897-4c1a-ba76-191003f08747",
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "dayOfWeekId": "da824886-c1cc-4486-9299-a3a361d9526d",
    "duration": 1,
    "createdAt": "2024-01-08T17:53:59.055Z",
    "updatedAt": "2024-01-08T18:01:13.129Z",
    "deletedAt": null
}
```

## createRecord

学習記録を登録します。

### リクエスト

```json
{
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "date": "2024-01-10T00:00:00.000Z",
    "duration": 2,
    "note": "今日はJavaScriptの学習をしました。"
}
```

### レスポンス

```json
{
    "recordId": "b23ddfb2-6d43-42c2-9a1f-d0f650fd4235",
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "date": "2024-01-10T00:00:00.000Z",
    "duration": 2,
    "note": "今日はJavaScriptの学習をしました。",
    "createdAt": "2024-01-08T18:25:21.767Z",
    "updatedAt": "2024-01-08T18:25:21.767Z",
    "deletedAt": null
}
```

## getRecordsList

学習記録の一覧を取得します。

### リクエスト

```json
{
    "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
    "startDate": "2024-01-03T00:00:00.000Z",
    "endDate": "2024-01-10T00:00:00.000Z"
}
```

### レスポンス

```json
[
    {
        "recordId": "3df741c6-9e46-4efe-8bf5-d0ec96df1e9d",
        "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
        "date": "2024-01-08T00:00:00.077Z",
        "duration": 2,
        "note": "今日はJavaScriptの学習をしました。",
        "createdAt": "2024-01-08T18:17:57.085Z",
        "updatedAt": "2024-01-08T18:17:57.085Z",
        "deletedAt": null
    },
    {
        "recordId": "20d46cda-7521-4834-b11a-795229c6ea9f",
        "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
        "date": "2024-01-09T00:00:00.000Z",
        "duration": 2,
        "note": "今日はJavaScriptの学習をしました。",
        "createdAt": "2024-01-08T18:19:50.321Z",
        "updatedAt": "2024-01-08T18:19:50.321Z",
        "deletedAt": null
    },
    {
        "recordId": "b23ddfb2-6d43-42c2-9a1f-d0f650fd4235",
        "userId": "f61aa228-bf49-42df-93ab-b628b416e5b9",
        "date": "2024-01-10T00:00:00.000Z",
        "duration": 2,
        "note": "今日はJavaScriptの学習をしました。",
        "createdAt": "2024-01-08T18:25:21.767Z",
        "updatedAt": "2024-01-08T18:25:21.767Z",
        "deletedAt": null
    }
]
```