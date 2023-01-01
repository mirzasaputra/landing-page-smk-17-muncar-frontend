import {h, Fragment} from 'jsx-dom'
import { Component } from '@/utils/component'
// @extends('layouts.ajax')

export default class extends Component{
    render(){
        return(
            <div>
                <section class="meet-teachers-one">
                    <div class="container">
                        {/* @foreach($staffs as $key => $staff) */}
                        <div class="row mb-4">
                            {/* @foreach($staff as $item) */}
                            {/* <!--Start Single Meet Teachers One--> */}
                            <div class="col-xl-4 col-lg-4 mx-auto">
                                <div class="meet-teachers-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style="min-height: 430px;max-height: 430px;">
                                    <div class="meet-teachers-one__single-img">
                                        <img src="{{ asset('storage/images/staffs/'. $item->image) }}" alt=""/>
                                    </div>

                                    <div class="meet-teachers-one__single-content">
                                        <div class="meet-teachers-one__single-middle-content">
                                            <div class="title">
                                                {/* <h4><a href="{{ route('staffs.detail', $item->slug) }}" data-toggle="ajax">{{ $item->name }}</a></h4> */}
                                                {/* <p class="mt-4">{{ $item->staffPosition->name }}</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End Single Meet Teachers One--> */}
                            {/* @endforeach */}
                        </div>

                        {/* @if($key != count($staffs))
                            <hr class="mb-4">
                        @endif
                        @endforeach */}
                    </div>
                </section>
            </div>
        )
    }
}

{/* @section('content')

@endsection */}