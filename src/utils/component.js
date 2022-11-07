import { Component } from 'jsx-dom'
import autoBind from 'auto-bind/react'
import Swal from 'sweetalert2'

export default class extends Component {
    constructor(props) {
        super(props)

        for (var key in props) {
            this[key] = props[key]
        }

        for (var key in this.constructor.defaultProps) {
            this[key] = this.constructor.defaultProps[key]
        }

        autoBind(this)
    }

    updateState(callback) {
        callback()
    }

    createScript(link) {
        const script = document.createElement("script")
        script.src = link
        script.async = true
        document.getElementById('app').appendChild(script)
    }

    showLoading() {
        return Swal.fire({
            title: 'LOADING...',
            text: 'Sedang mengambil data',
            allowOutsideClick: false,
            allowEnterKey: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading()
            }
        })
    }

    hideLoading() {
        return Swal.close()
    }

    showConfirm(title = 'Hapus Data ?', message = 'Yakin ingin menghapus data?', icon = 'question') {
        return Swal.fire({
            title: title,
            icon: icon,
            text: message,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Ya, lanjutkan',
            cancelButtonText: 'Batal',
            confirmButtonColor: '#d1403b'
        })
    }
}