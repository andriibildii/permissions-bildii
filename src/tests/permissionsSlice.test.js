import reducer, {removePermission, updatePermission} from '../app/permissionsSlice'

describe('Permissions redux state tests', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual({
            permissions: [
                {id: 1, name: 'Username 1', view: false, execute: false, modify: false, del: false},
                {id: 2, name: 'Username 2', view: false, execute: false, modify: false, del: false},
                {id: 3, name: 'Username 3', view: false, execute: false, modify: false, del: false},
                {id: 4, name: 'Username 4', view: false, execute: false, modify: false, del: false},
                {id: 5, name: 'Username 5', view: false, execute: false, modify: false, del: false},
                {id: 6, name: 'Username 6', view: false, execute: false, modify: false, del: false},
                {id: 7, name: 'Username 7', view: false, execute: false, modify: false, del: false},
                {id: 8, name: 'Username 8', view: false, execute: false, modify: false, del: false},
                {id: 9, name: 'Username 9', view: false, execute: false, modify: false, del: false},
                {id: 10, name: 'Username 10', view: false, execute: false, modify: false, del: false},
                {id: 11, name: 'Username 11', view: false, execute: false, modify: false, del: false},
                {id: 12, name: 'Username 12', view: false, execute: false, modify: false, del: false},
                {id: 13, name: 'Username 13', view: false, execute: false, modify: false, del: false},
                {id: 14, name: 'Username 14', view: false, execute: false, modify: false, del: false},
                {id: 15, name: 'Username 15', view: false, execute: false, modify: false, del: false},
                {id: 16, name: 'Username 16', view: false, execute: false, modify: false, del: false},
                {id: 17, name: 'Username 17', view: false, execute: false, modify: false, del: false},
                {id: 18, name: 'Username 18', view: false, execute: false, modify: false, del: false},
                {id: 19, name: 'Username 19', view: false, execute: false, modify: false, del: false},
                {id: 20, name: 'Username 20', view: false, execute: false, modify: false, del: false},
                {id: 21, name: 'Username 21', view: false, execute: false, modify: false, del: false},
                {id: 22, name: 'Username 22', view: false, execute: false, modify: false, del: false},
                {id: 23, name: 'Username 23', view: false, execute: false, modify: false, del: false},
                {id: 24, name: 'Username 24', view: false, execute: false, modify: false, del: false},
                {id: 25, name: 'Username 25', view: false, execute: false, modify: false, del: false},
                {id: 26, name: 'Username 26', view: false, execute: false, modify: false, del: false},
                {id: 27, name: 'Username 27', view: false, execute: false, modify: false, del: false},
                {id: 28, name: 'Username 28', view: false, execute: false, modify: false, del: false},
                {id: 29, name: 'Username 29', view: false, execute: false, modify: false, del: false},
                {id: 30, name: 'Username 30', view: false, execute: false, modify: false, del: false},
            ]
        })
    })

    test('should handle removing permission from the previous state', () => {
        const previousState = {
            permissions: [
                {id: 1, name: 'Username 1', view: false, execute: false, modify: false, del: false},
                {id: 2, name: 'Username 2', view: false, execute: false, modify: false, del: false},
                {id: 3, name: 'Username 3', view: false, execute: false, modify: false, del: false},
            ]
        }
        expect(reducer(previousState, removePermission({id: 2}))).toEqual({
            permissions: [
                {id: 1, name: 'Username 1', view: false, execute: false, modify: false, del: false},
                {id: 3, name: 'Username 3', view: false, execute: false, modify: false, del: false},
            ]
        })
    })


    it('should handle updating permission from the previous state', () => {
        const previousState = {
            permissions: [
                {id: 1, name: 'Username 1', view: false, execute: false, modify: false, del: false},
                {id: 2, name: 'Username 2', view: false, execute: false, modify: false, del: false}
            ]
        }
        expect(reducer(previousState, updatePermission([
            {id: 1, name: 'Username 1', view: true, execute: false, modify: true, del: false},
            {id: 2, name: 'Username 2', view: false, execute: true, modify: false, del: true}]))).toEqual({
            permissions: [
                {id: 1, name: 'Username 1', view: true, execute: false, modify: true, del: false},
                {id: 2, name: 'Username 2', view: false, execute: true, modify: false, del: true}
            ]
        })
    })
})