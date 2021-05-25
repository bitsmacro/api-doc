# Getting Started with DoctorSab

## Getting Started

### Installation

The following section explains how to use the DoctorSabLib library in a new project.

### Initialize the API Client

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production
  accessToken: 'AccessToken',
})
```

### Authorization

This API uses `OAuth 2 Bearer token`.

## Client Class Documentation

### DoctorSab Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

### Controllers

| Name | Description |
|  --- | --- |
| user | Gets UserController |
| doctor | Gets DoctorController |
| misc | Gets MiscController |

## API Reference

### List of APIs

* [User](#user)
* [Doctor](#doctor)
* [Misc](#misc)

### User

#### Doc Saab Signup for New User

localhost:8080/v1/user/signup

```ts
async docSaabSignupForNewUser(
  accept: string,
  contentType: string,
  body: DocSaabSignupForNewUserRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`DocSaabSignupForNewUserRequest`](#doc-saab-signup-for-new-user-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
const bodyRoles: string[] = ['User'];
const body: DocSaabSignupForNewUserRequest = {
  firstName: 'Sagar',
  midName: '',
  lastName: 'Duwal',
  contactNumber: '9849422744',
  email: 'sagar@sagar.com',
  password: 'sagar',
  roles: bodyRoles,
};

try {
  const { result, ...httpResponse } = await userController.docSaabSignupForNewUser(accept, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Get User Details

localhost:8080/v1/user/bdb2f1f6-3555-4ca6-ae24-08607af09071

```ts
async docSaabGetUserDetails(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await userController.docSaabGetUserDetails(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Get List of Users

localhost:8080/v1/users

```ts
async docSaabGetListOfUsers(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await userController.docSaabGetListOfUsers(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Get User Profile

localhost:8080/v1/user/me

```ts
async docSaabGetUserProfile(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await userController.docSaabGetUserProfile(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Get List of User Notes

localhost:8080/v1/notes

```ts
async docSaabGetListOfUserNotes(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocSaabGetListOfUserNotes>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

[`DocSaabGetListOfUserNotes`](#doc-saab-get-list-of-user-notes-1)

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await userController.docSaabGetListOfUserNotes(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Example Response *(as JSON)*

```json
{
  "success": true,
  "noteResponse": {
    "notes": [
      {
        "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
        "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
        "oxygenReading": "98",
        "feverReading": "98",
        "bloodPressure": "98",
        "pulseReading": "98",
        "comments": "",
        "recordedDate": "2021-05-22T16:25:24.89Z",
        "deleted": false,
        "flagged": false,
        "createdAt": "2021-05-22T20:26:41.513Z",
        "updatedAt": "2021-05-22T20:26:41.513Z"
      }
    ]
  }
}
```

#### Doc Saab Create User Note

localhost:8080/v1/note

```ts
async docSaabCreateUserNote(
  accept: string,
  contentType: string,
  body: DocSaabCreateUserNoteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocSaabCreateUserNote>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`DocSaabCreateUserNoteRequest`](#doc-saab-create-user-note-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

[`DocSaabCreateUserNote`](#doc-saab-create-user-note-1)

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
const body: DocSaabCreateUserNoteRequest = {
  oxygenReading: '98',
  feverReading: '98',
  bloodPressure: '98',
  pulseReading: '98',
  comments: '',
  recordedDate: '2021-05-22 16:25:24.89+00',
};

try {
  const { result, ...httpResponse } = await userController.docSaabCreateUserNote(accept, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Example Response *(as JSON)*

```json
{
  "success": true,
  "noteResponse": {
    "note": {
      "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
      "deleted": false,
      "flagged": false,
      "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
      "oxygenReading": "98",
      "feverReading": "98",
      "bloodPressure": "98",
      "pulseReading": "98",
      "comments": "",
      "recordedDate": "2021-05-22T16:25:24.89Z",
      "updatedAt": "2021-05-22T20:26:41.513Z",
      "createdAt": "2021-05-22T20:26:41.513Z"
    }
  }
}
```

#### Doc Saab Delete Note for User With Note Id

```ts
async docSaabDeleteNoteForUserWithNoteId(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocSaabDeleteNoteForUserWithNoteId>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

[`DocSaabDeleteNoteForUserWithNoteId`](#doc-saab-delete-note-for-user-with-note-id-1)

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await userController.docSaabDeleteNoteForUserWithNoteId(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Example Response *(as JSON)*

```json
{
  "success": true
}
```

#### Doc Saab Get Detail of User Notes

```ts
async docSaabGetDetailOfUserNotes(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocSaabGetDetailOfUserNotes>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

[`DocSaabGetDetailOfUserNotes`](#doc-saab-get-detail-of-user-notes-1)

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await userController.docSaabGetDetailOfUserNotes(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Example Response *(as JSON)*

```json
{
  "success": true,
  "noteResponse": {
    "notes": {
      "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
      "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
      "oxygenReading": "98",
      "feverReading": "98",
      "bloodPressure": "98",
      "pulseReading": "98",
      "comments": "",
      "recordedDate": "2021-05-22T16:25:24.89Z",
      "deleted": true,
      "flagged": false,
      "createdAt": "2021-05-22T20:26:41.513Z",
      "updatedAt": "2021-05-22T21:01:16.488Z"
    }
  }
}
```

### Doctor

#### Doc Saab Delete Note for Doctor With Note Id

```ts
async docSaabDeleteNoteForDoctorWithNoteId(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await doctorController.docSaabDeleteNoteForDoctorWithNoteId(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Get List of Doctor Notes

localhost:8080/v1/notes

```ts
async docSaabGetListOfDoctorNotes(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await doctorController.docSaabGetListOfDoctorNotes(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Get Detail of Doctor Notes

```ts
async docSaabGetDetailOfDoctorNotes(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await doctorController.docSaabGetDetailOfDoctorNotes(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Create Doctor Note

localhost:8080/v1/note

```ts
async docSaabCreateDoctorNote(
  accept: string,
  contentType: string,
  body: DocSaabCreateDoctorNoteRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`DocSaabCreateDoctorNoteRequest`](#doc-saab-create-doctor-note-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
const body: DocSaabCreateDoctorNoteRequest = {
  sessionId: '4d7713c6-bb18-11eb-8529-0242ac130004',
  userId: '49c24d4d-7a65-421a-8adb-1682f5bd315c',
  doctorId: '8469623d-3c7b-4b4d-be3b-83fc87909e56',
  noteJson: '{"note":"response 1"}',
};

try {
  const { result, ...httpResponse } = await doctorController.docSaabCreateDoctorNote(accept, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Create Doctor

localhost:8080/v1/doctor/create

```ts
async docSaabCreateDoctor(
  accept: string,
  contentType: string,
  body: DocSaabCreateDoctorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `body` | [`DocSaabCreateDoctorRequest`](#doc-saab-create-doctor-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
const bodyRoles: string[] = ['Doctor'];
const body: DocSaabCreateDoctorRequest = {
  firstName: 'Doctor',
  midName: '',
  lastName: 'User',
  contactNumber: '9849422742',
  email: 'doctor@sagar.com',
  password: 'doctoruser',
  roles: bodyRoles,
  nmc: '123ABC',
  hospital: 'ABC',
  qualification: 'ABC',
  speciality: 'ABC',
};

try {
  const { result, ...httpResponse } = await doctorController.docSaabCreateDoctor(accept, contentType, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Get Doctor Details

localhost:8080/v1/doctor/f499e4b4-69af-445b-8c7f-5a42817a863e

```ts
async docSaabGetDoctorDetails(
  accept: string,
  contentType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `contentType` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const accept = 'application/json';
const contentType = 'application/json';
try {
  const { result, ...httpResponse } = await doctorController.docSaabGetDoctorDetails(accept, contentType);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

#### Doc Saab Get List of Doctors

localhost:8080/v1/doctors

```ts
async docSaabGetListOfDoctors(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
try {
  const { result, ...httpResponse } = await doctorController.docSaabGetListOfDoctors();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

### Misc

#### Doc Saab Login API

localhost:8080/v1/login

```ts
async docSaabLoginAPI(
  body: DocSaabLoginAPIRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocSaabLoginAPI>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DocSaabLoginAPIRequest`](#doc-saab-login-api-request) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

##### Response Type

[`DocSaabLoginAPI`](#doc-saab-login-api-1)

##### Example Usage

```ts
const bodyRoles: string[] = ['User'];
const body: DocSaabLoginAPIRequest = {
  email: 'sagar@sagar.com',
  password: 'sagar',
  roles: bodyRoles,
};

try {
  const { result, ...httpResponse } = await miscController.docSaabLoginAPI(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Example Response *(as JSON)*

```json
{
  "success": true,
  "loginResponse": {
    "token": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjQ5YzI0ZDRkLTdhNjUtNDIxYS04YWRiLTE2ODJmNWJkMzE1YyIsImNvbnRhY3ROdW1iZXIiOiI5ODQ5NDIyNzQ0IiwiZW1haWwiOiJzYWdhckBzYWdhci5jb20iLCJzdGF0dXMiOmZhbHNlfSwicm9sZSI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjIxNzEyMzMwLCJleHAiOjE2MjE3MjQzMzB9.-Dx4PdVqzLhK8tL1OF49oYWlFHXBg8UNY9Ldk2ku7Zs",
      "expires": 1621724330
    },
    "roles": [
      "ROLE_USER"
    ],
    "user": {
      "id": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
      "firstName": "Sagar",
      "midName": "",
      "lastName": "Duwal",
      "username": null,
      "contactNumber": "9849422744",
      "email": "sagar@sagar.com",
      "lastLogin": null,
      "status": false,
      "onlineStatus": false,
      "createdAt": "2021-05-22T09:07:36.887Z",
      "updatedAt": "2021-05-22T09:07:36.887Z",
      "doctor": null
    }
  }
}
```

## Model Reference

### Structures

* [Doc Saab Signup for New User Request](#doc-saab-signup-for-new-user-request)
* [Doc Saab Create Doctor Note Request](#doc-saab-create-doctor-note-request)
* [Doc Saab Get List of User Notes](#doc-saab-get-list-of-user-notes-1)
* [Note Response](#note-response)
* [Note](#note)
* [Doc Saab Create User Note Request](#doc-saab-create-user-note-request)
* [Doc Saab Create User Note](#doc-saab-create-user-note-1)
* [Note Response 1](#note-response-1)
* [Doc Saab Delete Note for User With Note Id](#doc-saab-delete-note-for-user-with-note-id-1)
* [Doc Saab Get Detail of User Notes](#doc-saab-get-detail-of-user-notes-1)
* [Note Response 2](#note-response-2)
* [Notes](#notes)
* [Doc Saab Create Doctor Request](#doc-saab-create-doctor-request)
* [Doc Saab Login API Request](#doc-saab-login-api-request)
* [Doc Saab Login API](#doc-saab-login-api-1)
* [Login Response](#login-response)
* [Token](#token)
* [User](#user-1)

#### Doc Saab Signup for New User Request

##### Class Name

`DocSaabSignupForNewUserRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `midName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `contactNumber` | `string` | Required | - |
| `email` | `string` | Required | - |
| `password` | `string` | Required | - |
| `roles` | `string[]` | Required | - |

##### Example (as JSON)

```json
{
  "firstName": "Sagar",
  "midName": "",
  "lastName": "Duwal",
  "contactNumber": "9849422744",
  "email": "sagar@sagar.com",
  "password": "sagar",
  "roles": [
    "User"
  ]
}
```

#### Doc Saab Create Doctor Note Request

##### Class Name

`DocSaabCreateDoctorNoteRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sessionId` | `string` | Required | - |
| `userId` | `string` | Required | - |
| `doctorId` | `string` | Required | - |
| `noteJson` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "sessionId": "4d7713c6-bb18-11eb-8529-0242ac130004",
  "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
  "doctorId": "8469623d-3c7b-4b4d-be3b-83fc87909e56",
  "noteJson": "{\"note\":\"response 1\"}"
}
```

#### Doc Saab Get List of User Notes

##### Class Name

`DocSaabGetListOfUserNotes`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |
| `noteResponse` | [`NoteResponse`](#note-response) | Required | - |

##### Example (as JSON)

```json
{
  "success": true,
  "noteResponse": {
    "notes": [
      {
        "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
        "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
        "oxygenReading": "98",
        "feverReading": "98",
        "bloodPressure": "98",
        "pulseReading": "98",
        "comments": "",
        "recordedDate": "2021-05-22T16:25:24.89Z",
        "deleted": false,
        "flagged": false,
        "createdAt": "2021-05-22T20:26:41.513Z",
        "updatedAt": "2021-05-22T20:26:41.513Z"
      }
    ]
  }
}
```

#### Note Response

##### Class Name

`NoteResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notes` | [`Note[]`](#note) | Required | - |

##### Example (as JSON)

```json
{
  "notes": [
    {
      "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
      "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
      "oxygenReading": "98",
      "feverReading": "98",
      "bloodPressure": "98",
      "pulseReading": "98",
      "comments": "",
      "recordedDate": "2021-05-22T16:25:24.89Z",
      "deleted": false,
      "flagged": false,
      "createdAt": "2021-05-22T20:26:41.513Z",
      "updatedAt": "2021-05-22T20:26:41.513Z"
    }
  ]
}
```

#### Note

##### Class Name

`Note`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `userId` | `string` | Required | - |
| `oxygenReading` | `string` | Required | - |
| `feverReading` | `string` | Required | - |
| `bloodPressure` | `string` | Required | - |
| `pulseReading` | `string` | Required | - |
| `comments` | `string` | Required | - |
| `recordedDate` | `string` | Required | - |
| `deleted` | `boolean` | Required | - |
| `flagged` | `boolean` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
  "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
  "oxygenReading": "98",
  "feverReading": "98",
  "bloodPressure": "98",
  "pulseReading": "98",
  "comments": "",
  "recordedDate": "2021-05-22T16:25:24.89Z",
  "deleted": false,
  "flagged": false,
  "createdAt": "2021-05-22T20:26:41.513Z",
  "updatedAt": "2021-05-22T20:26:41.513Z"
}
```

#### Doc Saab Create User Note Request

##### Class Name

`DocSaabCreateUserNoteRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `oxygenReading` | `string` | Required | - |
| `feverReading` | `string` | Required | - |
| `bloodPressure` | `string` | Required | - |
| `pulseReading` | `string` | Required | - |
| `comments` | `string` | Required | - |
| `recordedDate` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "oxygenReading": "98",
  "feverReading": "98",
  "bloodPressure": "98",
  "pulseReading": "98",
  "comments": "",
  "recordedDate": "2021-05-22 16:25:24.89+00"
}
```

#### Doc Saab Create User Note

##### Class Name

`DocSaabCreateUserNote`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |
| `noteResponse` | [`NoteResponse1`](#note-response-1) | Required | - |

##### Example (as JSON)

```json
{
  "success": true,
  "noteResponse": {
    "note": {
      "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
      "deleted": false,
      "flagged": false,
      "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
      "oxygenReading": "98",
      "feverReading": "98",
      "bloodPressure": "98",
      "pulseReading": "98",
      "comments": "",
      "recordedDate": "2021-05-22T16:25:24.89Z",
      "updatedAt": "2021-05-22T20:26:41.513Z",
      "createdAt": "2021-05-22T20:26:41.513Z"
    }
  }
}
```

#### Note Response 1

##### Class Name

`NoteResponse1`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `note` | [`Note`](#note) | Required | - |

##### Example (as JSON)

```json
{
  "note": {
    "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
    "deleted": false,
    "flagged": false,
    "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
    "oxygenReading": "98",
    "feverReading": "98",
    "bloodPressure": "98",
    "pulseReading": "98",
    "comments": "",
    "recordedDate": "2021-05-22T16:25:24.89Z",
    "updatedAt": "2021-05-22T20:26:41.513Z",
    "createdAt": "2021-05-22T20:26:41.513Z"
  }
}
```

#### Doc Saab Delete Note for User With Note Id

##### Class Name

`DocSaabDeleteNoteForUserWithNoteId`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |

##### Example (as JSON)

```json
{
  "success": true
}
```

#### Doc Saab Get Detail of User Notes

##### Class Name

`DocSaabGetDetailOfUserNotes`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |
| `noteResponse` | [`NoteResponse2`](#note-response-2) | Required | - |

##### Example (as JSON)

```json
{
  "success": true,
  "noteResponse": {
    "notes": {
      "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
      "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
      "oxygenReading": "98",
      "feverReading": "98",
      "bloodPressure": "98",
      "pulseReading": "98",
      "comments": "",
      "recordedDate": "2021-05-22T16:25:24.89Z",
      "deleted": true,
      "flagged": false,
      "createdAt": "2021-05-22T20:26:41.513Z",
      "updatedAt": "2021-05-22T21:01:16.488Z"
    }
  }
}
```

#### Note Response 2

##### Class Name

`NoteResponse2`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notes` | [`Notes`](#notes) | Required | - |

##### Example (as JSON)

```json
{
  "notes": {
    "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
    "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
    "oxygenReading": "98",
    "feverReading": "98",
    "bloodPressure": "98",
    "pulseReading": "98",
    "comments": "",
    "recordedDate": "2021-05-22T16:25:24.89Z",
    "deleted": true,
    "flagged": false,
    "createdAt": "2021-05-22T20:26:41.513Z",
    "updatedAt": "2021-05-22T21:01:16.488Z"
  }
}
```

#### Notes

##### Class Name

`Notes`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `userId` | `string` | Required | - |
| `oxygenReading` | `string` | Required | - |
| `feverReading` | `string` | Required | - |
| `bloodPressure` | `string` | Required | - |
| `pulseReading` | `string` | Required | - |
| `comments` | `string` | Required | - |
| `recordedDate` | `string` | Required | - |
| `deleted` | `boolean` | Required | - |
| `flagged` | `boolean` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "id": "2643deba-a33f-4946-bb73-0238ef7695b0",
  "userId": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
  "oxygenReading": "98",
  "feverReading": "98",
  "bloodPressure": "98",
  "pulseReading": "98",
  "comments": "",
  "recordedDate": "2021-05-22T16:25:24.89Z",
  "deleted": true,
  "flagged": false,
  "createdAt": "2021-05-22T20:26:41.513Z",
  "updatedAt": "2021-05-22T21:01:16.488Z"
}
```

#### Doc Saab Create Doctor Request

##### Class Name

`DocSaabCreateDoctorRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `midName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `contactNumber` | `string` | Required | - |
| `email` | `string` | Required | - |
| `password` | `string` | Required | - |
| `roles` | `string[]` | Required | - |
| `nmc` | `string` | Required | - |
| `hospital` | `string` | Required | - |
| `qualification` | `string` | Required | - |
| `speciality` | `string` | Required | - |

##### Example (as JSON)

```json
{
  "firstName": "Doctor",
  "midName": "",
  "lastName": "User",
  "contactNumber": "9849422742",
  "email": "doctor@sagar.com",
  "password": "doctoruser",
  "roles": [
    "Doctor"
  ],
  "nmc": "123ABC",
  "hospital": "ABC",
  "qualification": "ABC",
  "speciality": "ABC"
}
```

#### Doc Saab Login API Request

##### Class Name

`DocSaabLoginAPIRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | - |
| `password` | `string` | Required | - |
| `roles` | `string[]` | Required | - |

##### Example (as JSON)

```json
{
  "email": "sagar@sagar.com",
  "password": "sagar",
  "roles": [
    "User"
  ]
}
```

#### Doc Saab Login API

##### Class Name

`DocSaabLoginAPI`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean` | Required | - |
| `loginResponse` | [`LoginResponse`](#login-response) | Required | - |

##### Example (as JSON)

```json
{
  "success": true,
  "loginResponse": {
    "token": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjQ5YzI0ZDRkLTdhNjUtNDIxYS04YWRiLTE2ODJmNWJkMzE1YyIsImNvbnRhY3ROdW1iZXIiOiI5ODQ5NDIyNzQ0IiwiZW1haWwiOiJzYWdhckBzYWdhci5jb20iLCJzdGF0dXMiOmZhbHNlfSwicm9sZSI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjIxNzEyMzMwLCJleHAiOjE2MjE3MjQzMzB9.-Dx4PdVqzLhK8tL1OF49oYWlFHXBg8UNY9Ldk2ku7Zs",
      "expires": 1621724330
    },
    "roles": [
      "ROLE_USER"
    ],
    "user": {
      "id": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
      "firstName": "Sagar",
      "midName": "",
      "lastName": "Duwal",
      "username": null,
      "contactNumber": "9849422744",
      "email": "sagar@sagar.com",
      "lastLogin": null,
      "status": false,
      "onlineStatus": false,
      "createdAt": "2021-05-22T09:07:36.887Z",
      "updatedAt": "2021-05-22T09:07:36.887Z",
      "doctor": null
    }
  }
}
```

#### Login Response

##### Class Name

`LoginResponse`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | [`Token`](#token) | Required | - |
| `roles` | `string[]` | Required | - |
| `user` | [`User`](#user-1) | Required | - |

##### Example (as JSON)

```json
{
  "token": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjQ5YzI0ZDRkLTdhNjUtNDIxYS04YWRiLTE2ODJmNWJkMzE1YyIsImNvbnRhY3ROdW1iZXIiOiI5ODQ5NDIyNzQ0IiwiZW1haWwiOiJzYWdhckBzYWdhci5jb20iLCJzdGF0dXMiOmZhbHNlfSwicm9sZSI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjIxNzEyMzMwLCJleHAiOjE2MjE3MjQzMzB9.-Dx4PdVqzLhK8tL1OF49oYWlFHXBg8UNY9Ldk2ku7Zs",
    "expires": 1621724330
  },
  "roles": [
    "ROLE_USER"
  ],
  "user": {
    "id": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
    "firstName": "Sagar",
    "midName": "",
    "lastName": "Duwal",
    "username": null,
    "contactNumber": "9849422744",
    "email": "sagar@sagar.com",
    "lastLogin": null,
    "status": false,
    "onlineStatus": false,
    "createdAt": "2021-05-22T09:07:36.887Z",
    "updatedAt": "2021-05-22T09:07:36.887Z",
    "doctor": null
  }
}
```

#### Token

##### Class Name

`Token`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `token` | `string` | Required | - |
| `expires` | `number` | Required | - |

##### Example (as JSON)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjQ5YzI0ZDRkLTdhNjUtNDIxYS04YWRiLTE2ODJmNWJkMzE1YyIsImNvbnRhY3ROdW1iZXIiOiI5ODQ5NDIyNzQ0IiwiZW1haWwiOiJzYWdhckBzYWdhci5jb20iLCJzdGF0dXMiOmZhbHNlfSwicm9sZSI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjIxNzEyMzMwLCJleHAiOjE2MjE3MjQzMzB9.-Dx4PdVqzLhK8tL1OF49oYWlFHXBg8UNY9Ldk2ku7Zs",
  "expires": 1621724330
}
```

#### User

##### Class Name

`User`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `firstName` | `string` | Required | - |
| `midName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `username` | `string \| null` | Required | - |
| `contactNumber` | `string` | Required | - |
| `email` | `string` | Required | - |
| `lastLogin` | `string \| null` | Required | - |
| `status` | `boolean` | Required | - |
| `onlineStatus` | `boolean` | Required | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `doctor` | `string \| null` | Required | - |

##### Example (as JSON)

```json
{
  "id": "49c24d4d-7a65-421a-8adb-1682f5bd315c",
  "firstName": "Sagar",
  "midName": "",
  "lastName": "Duwal",
  "username": null,
  "contactNumber": "9849422744",
  "email": "sagar@sagar.com",
  "lastLogin": null,
  "status": false,
  "onlineStatus": false,
  "createdAt": "2021-05-22T09:07:36.887Z",
  "updatedAt": "2021-05-22T09:07:36.887Z",
  "doctor": null
}
```

## Common Code Documentation

### ApiResponse

An interface for the result of an API call.

#### Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status codee. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string \| Blob \| NodeJS.ReadableStream | Original body from the response. |

### ApiError

Thrown when the HTTP status code is not okay.

The ApiError extends the ApiResponse interface, so all ApiResponse properties are available.

#### Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status codee. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string \| Blob \| NodeJS.ReadableStream | Original body from the response. |

